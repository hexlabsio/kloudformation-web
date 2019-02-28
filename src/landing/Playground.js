import React from "react";
import "./playground.sass"
import playground from 'kotlin-playground';


class Playground extends React.Component {
    componentDidMount() {
        playground("code", {
            theme: "darcula",
            server: "http://hexla-loadb-o4z00f89fxgv-1271793115.eu-west-1.elb.amazonaws.com"
        });
    }

    render() {
        return (
            <div className="playground">
                <div className="playground-title">Try KloudFormation</div>
                <code autocomplete="true" highlight-on-fly="true">
                    {
                    `import io.kloudformation.model.KloudFormationTemplate
import io.kloudformation.resource.aws.ec2.*
import io.kloudformation.resource.aws.eks.*
import io.kloudformation.resource.aws.ses.*
import io.kloudformation.resource.aws.codebuild.*
import io.kloudformation.resource.aws.robomaker.*
import io.kloudformation.resource.aws.wafregional.*
import io.kloudformation.resource.aws.appstream.*
import io.kloudformation.resource.aws.kinesisanalytics.*
import io.kloudformation.resource.aws.docdb.*
import io.kloudformation.resource.aws.fsx.*
import io.kloudformation.resource.aws.kinesisanalyticsv2.*
import io.kloudformation.resource.aws.codecommit.*
import io.kloudformation.resource.aws.cloud9.*
import io.kloudformation.resource.aws.sagemaker.*
import io.kloudformation.resource.aws.route53resolver.*
import io.kloudformation.resource.aws.appsync.*
import io.kloudformation.resource.aws.stepfunctions.*
import io.kloudformation.resource.aws.iotanalytics.*
import io.kloudformation.resource.aws.glue.*
import io.kloudformation.resource.aws.neptune.*
import io.kloudformation.resource.aws.iot1click.*
import io.kloudformation.resource.aws.cognito.*
import io.kloudformation.resource.aws.athena.*
import io.kloudformation.resource.aws.batch.*
import io.kloudformation.resource.aws.dax.*
import io.kloudformation.resource.aws.ssm.*
import io.kloudformation.resource.aws.inspector.*
import io.kloudformation.resource.aws.opsworkscm.*
import io.kloudformation.resource.aws.config.*
import io.kloudformation.resource.aws.amazonmq.*
import io.kloudformation.resource.aws.servicediscovery.*
import io.kloudformation.resource.aws.autoscalingplans.*
import io.kloudformation.resource.aws.ram.*
import io.kloudformation.resource.aws.apigateway.*
import io.kloudformation.resource.aws.guardduty.*
import io.kloudformation.resource.aws.budgets.*
import io.kloudformation.resource.aws.dlm.*
import io.kloudformation.resource.aws.servicecatalog.*
import io.kloudformation.resource.aws.codepipeline.*
import io.kloudformation.resource.aws.iam.*
import io.kloudformation.resource.aws.cloudfront.*
import io.kloudformation.resource.aws.lambda.*
import io.kloudformation.resource.aws.secretsmanager.*
import io.kloudformation.resource.aws.events.*
import io.kloudformation.resource.aws.cloudwatch.*
import io.kloudformation.resource.aws.dms.*
import io.kloudformation.resource.aws.apigatewayv2.*
import io.kloudformation.resource.aws.elasticbeanstalk.*
import io.kloudformation.resource.aws.waf.*
import io.kloudformation.resource.aws.elasticsearch.*
import io.kloudformation.resource.aws.rds.*
import io.kloudformation.resource.aws.workspaces.*
import io.kloudformation.resource.aws.emr.*
import io.kloudformation.resource.aws.logs.*
import io.kloudformation.resource.aws.kinesis.*
import io.kloudformation.resource.aws.autoscaling.*
import io.kloudformation.resource.aws.sqs.*
import io.kloudformation.resource.aws.route53.*
import io.kloudformation.resource.aws.ecs.*
import io.kloudformation.resource.aws.elasticloadbalancingv2.*
import io.kloudformation.resource.aws.opsworks.*
import io.kloudformation.resource.aws.gamelift.*
import io.kloudformation.resource.aws.directoryservice.*
import io.kloudformation.resource.aws.sns.*
import io.kloudformation.resource.aws.efs.*
import io.kloudformation.resource.aws.kms.*
import io.kloudformation.resource.aws.redshift.*
import io.kloudformation.resource.aws.certificatemanager.*
import io.kloudformation.resource.aws.elasticloadbalancing.*
import io.kloudformation.resource.aws.iot.*
import io.kloudformation.resource.aws.elasticache.*
import io.kloudformation.resource.aws.codedeploy.*
import io.kloudformation.resource.aws.datapipeline.*
import io.kloudformation.resource.aws.cloudtrail.*
import io.kloudformation.resource.aws.cloudformation.*
import io.kloudformation.resource.aws.applicationautoscaling.*
import io.kloudformation.resource.aws.s3.*
import io.kloudformation.resource.aws.kinesisfirehose.*
import io.kloudformation.resource.aws.sdb.*
import io.kloudformation.resource.aws.ecr.*
import io.kloudformation.resource.aws.dynamodb.*
import io.kloudformation.model.iam.*
import io.kloudformation.toJson
import io.kloudformation.toYaml
fun main() {
println(
//sampleStart
KloudFormationTemplate.create {
    val myBucket = bucket("MyBucket")
}
//sampleEnd
.toYaml())
}
`}
                </code>
            </div>
        );
    }
}

export default Playground;