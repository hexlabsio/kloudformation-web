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
                        `fun main(args: Array<String>) {
    println("Hello, world!")
}`}
                </code>
            </div>
        );
    }
}

export default Playground;