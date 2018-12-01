import io.kloudformation.KloudFormation
import io.kloudformation.StackBuilder
import io.kloudformation.Value
import io.kloudformation.function.plus
import io.kloudformation.model.iam.Resource
import io.kloudformation.model.iam.action
import io.kloudformation.model.iam.policyDocument
import io.kloudformation.property.certificatemanager.certificate.DomainValidationOption
import io.kloudformation.property.cloudfront.cloudfrontoriginaccessidentity.CloudFrontOriginAccessIdentityConfig
import io.kloudformation.property.cloudfront.distribution.*
import io.kloudformation.resource.certificatemanager.certificate
import io.kloudformation.resource.cloudfront.cloudFrontOriginAccessIdentity
import io.kloudformation.resource.cloudfront.distribution
import io.kloudformation.resource.s3.bucket
import io.kloudformation.resource.s3.bucketPolicy

class Kloudformation: StackBuilder{
    override fun KloudFormation.create() {
        val index = "index.html"
        val domainName = "klouds.io"
        val certificate = certificate(+"www.$domainName"){
            subjectAlternativeNames(listOf(+domainName))
            domainValidationOptions(listOf(DomainValidationOption(
                    domainName = +domainName,
                    validationDomain = +domainName
            )))
            validationMethod("DNS")
        }
        bucket {
            accessControl(+"PublicRead")
            websiteConfiguration {
                indexDocument(index)
                errorDocument(index)
            }
        }.also { bucket ->
            bucketPolicy(
                    bucket = bucket.ref(),
                    policyDocument = policyDocument {
                        statement(
                                action = action("s3:GetObject"),
                                resource = Resource(listOf(+"arn:aws:s3:::" + bucket.ref() + "/*"))
                        ) { allPrincipals() }
                    }
            )
            val origin = Origin(
                    id = +"s3Origin",
                    domainName = bucket.WebsiteURL(),
                    customOriginConfig = CustomOriginConfig(
                            hTTPPort = Value.Of(80),
                            hTTPSPort = Value.Of(433),
                            originProtocolPolicy = +"https-only"
                    )
            )
            distribution(
                    DistributionConfig(
                            origins = listOf(origin),
                            enabled = +true,
                            aliases = +listOf(+"www.$domainName", +domainName),
                            defaultCacheBehavior = DefaultCacheBehavior(
                                    allowedMethods = +listOf(+"GET", +"HEAD", +"OPTIONS"),
                                    forwardedValues = ForwardedValues(queryString = +true),
                                    targetOriginId = origin.id,
                                    viewerProtocolPolicy = +"allow-all"
                            ),
                            defaultRootObject = +"index.html",
                            priceClass = +"PriceClass_200",
                            viewerCertificate = ViewerCertificate(acmCertificateArn = certificate.ref(), sslSupportMethod = +"sni-only")
                    )
            )
        }

    }
}