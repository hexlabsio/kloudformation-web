import io.kloudformation.KloudFormation
import io.kloudformation.StackBuilder
import io.kloudformation.function.plus
import io.kloudformation.model.iam.Resource
import io.kloudformation.model.iam.action
import io.kloudformation.model.iam.policyDocument
import io.kloudformation.resource.s3.bucket
import io.kloudformation.resource.s3.bucketPolicy

class Kloudformation: StackBuilder{
    override fun KloudFormation.create() {
        val index = "index.html"
        bucket {
            bucketName("kloudformation-web")
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
        }
    }
}