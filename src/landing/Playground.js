import React from "react";
import "./playground.sass"
import playground from 'kotlin-playground';


class Playground extends React.Component {
    componentDidMount() {
        playground("code", {
            theme: "darcula",
            server: "https://7vlko7vqo6.execute-api.eu-west-1.amazonaws.com"
        });
    }

    render() {
        return (
            <div className="playground">
                <div className="playground-title">Try Kloud Formation</div>
                <code>
                    {
                    `import io.kloudformation.model.KloudFormationTemplate
import io.kloudformation.resource.sns.topic
import io.kloudformation.toJson
import io.kloudformation.toYaml
fun main() {
//sampleStart
val template = KloudFormationTemplate.create {
    topic()
}
println(template.toYaml())
//sampleEnd
}

`}
                </code>
            </div>
        );
    }
}

export default Playground;