import io.kloudformation.KloudFormation
import io.kloudformation.StackBuilder
import io.kloudformation.Value
import io.kloudformation.function.plus
import io.kloudformation.model.KloudFormationTemplate.Builder.Companion.awsRegion
import io.kloudformation.model.Output
import io.kloudformation.model.iam.Resource
import io.kloudformation.model.iam.action
import io.kloudformation.model.iam.policyDocument
import io.kloudformation.property.certificatemanager.certificate.DomainValidationOption
import io.kloudformation.property.cloudfront.distribution.*
import io.kloudformation.property.route53.recordset.AliasTarget
import io.kloudformation.resource.certificatemanager.Certificate
import io.kloudformation.resource.certificatemanager.certificate
import io.kloudformation.resource.cloudfront.Distribution
import io.kloudformation.resource.cloudfront.distribution
import io.kloudformation.resource.route53.recordSet
import io.kloudformation.resource.s3.Bucket
import io.kloudformation.resource.s3.BucketPolicy
import io.kloudformation.resource.s3.bucket
import io.kloudformation.resource.s3.bucketPolicy

enum class CertificationValidationMethod{ EMAIL, DNS }
enum class SslSupportMethod(val value: String){ SNI("sni-only"), VIP("vip") }
enum class HttpMethod(val value: String){ HTTP1_1("http1.1"), HTTP2("http2") }
enum class CloudfrontPriceClass(val value: String){ _100("PriceClass_100"), _200("PriceClass_200"), ALL("PriceClass_ALL") }

fun KloudFormation.certificate(
        domainName: String,
        certificateValidationMethod: CertificationValidationMethod = CertificationValidationMethod.DNS,
        certificateBuilder: Certificate.Builder.() -> Certificate.Builder = {this}) = certificate(+"www.$domainName"){
        subjectAlternativeNames(listOf(+domainName))
        domainValidationOptions(listOf(DomainValidationOption(
                domainName = +domainName,
                validationDomain = +domainName
        )))
        validationMethod(certificateValidationMethod.name)
        certificateBuilder()
    }

fun KloudFormation.s3Website(
        domainName: String,
        indexDocument: String = "index.html",
        errorDocument: String = indexDocument,
        bucketName: String? = null,
        hostedZoneId: String? = null,
        certificateValidationMethod: CertificationValidationMethod = CertificationValidationMethod.DNS,
        certificateBuilder: Certificate.Builder.() -> Certificate.Builder = {this},
        certificateReference: Value<String> = certificate(domainName,certificateValidationMethod, certificateBuilder).ref(),
        bucketBuilder: Bucket.Builder.()-> Bucket.Builder = {this},
        bucket: Bucket = bucket {
            accessControl(+"PublicRead")
            if(bucketName != null) bucketName(bucketName)
            websiteConfiguration {
                indexDocument(indexDocument)
                errorDocument(errorDocument)
            }
            bucketBuilder()
        },
        bucketPolicy: BucketPolicy = bucketPolicy(
                bucket = bucket.ref(),
                policyDocument = policyDocument {
                    statement(
                            action = action("s3:GetObject"),
                            resource = Resource(listOf(+"arn:aws:s3:::" + bucket.ref() + "/*"))
                    ) { allPrincipals() }
                }
        ),
        origin: Origin = Origin(
                id = +"s3Origin",
                domainName = bucket.ref() + +".s3-website-" + awsRegion + +".amazonaws.com",
                customOriginConfig = CustomOriginConfig(
                        originProtocolPolicy = +"http-only"
                )
        ),
        sslSupportMethod: SslSupportMethod = SslSupportMethod.SNI,
        httpMethod: HttpMethod = HttpMethod.HTTP2,
        priceClass: CloudfrontPriceClass = CloudfrontPriceClass._200,
        defaultCacheBehavior: DefaultCacheBehavior = DefaultCacheBehavior(
                allowedMethods = +listOf(+"GET", +"HEAD", +"OPTIONS"),
                forwardedValues = ForwardedValues(queryString = +true),
                targetOriginId = origin.id,
                viewerProtocolPolicy = +"allow-all"
        ),
        distributionConfig: DistributionConfig = DistributionConfig(
                origins = listOf(origin),
                enabled = +true,
                aliases = +listOf(+"www.$domainName", +domainName),
                defaultCacheBehavior = defaultCacheBehavior,
                defaultRootObject = +indexDocument,
                priceClass = +priceClass.value,
                httpVersion = +httpMethod.value,
                viewerCertificate = ViewerCertificate(acmCertificateArn = certificateReference, sslSupportMethod = +sslSupportMethod.value)
        ),
        distributionBuilder: Distribution.Builder.() -> Distribution.Builder = {this},
        distribution: Distribution = distribution(
                distributionConfig = distributionConfig
        ){ distributionBuilder() }
) {
    if(hostedZoneId != null) {
        recordSet(
                type = +"A",
                name = +domainName + "."
        ) {
            tTL("300")
            aliasTarget(AliasTarget(dNSName = distribution.DomainName(), hostedZoneId = +hostedZoneId))
        }
        recordSet(
                type = +"CNAME",
                name = +"www" + +domainName + "."
        ) {
            tTL("300")
            aliasTarget(AliasTarget(dNSName = distribution.DomainName(), hostedZoneId = +hostedZoneId))
        }
    }
}

val certificateVariable = "KloudsCertificate"

class CertInUsEast1: StackBuilder{
    override fun KloudFormation.create() {
        val certificate = certificate("klouds.io")
        outputs(
                certificateVariable to Output(certificate.ref(), export = Output.Export(+certificateVariable))
        )
    }
}
class Kloudformation: StackBuilder{
    override fun KloudFormation.create() {
        s3Website(
                domainName = "klouds.io",
                bucketName = "kloudformation-website",
                hostedZoneId = "Z3OXURY7U9JE70",
                certificateReference = +"arn:aws:acm:us-east-1:662158168835:certificate/7541c12e-e284-4483-bd9d-fec25e90771c"
        )

    }
}