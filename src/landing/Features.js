import React from "react";
import "./features.sass"

export default props => {
    return (
        <div className="featureList">
            <div className="title">Features</div>
            <div className="features">
                <div className="feature">
                    <div className="icon">
                        <i className="fal fa-code"/>
                    </div>
                    <div className="details">
                        <div className="name">Infrastructure as Code</div>
                        <div className="description">Codifying your infrastructure, Kloud Formation allows you to model your entire infrastructure in code</div>
                    </div>
                </div>
                <div className="feature">
                    <div className="icon">
                        <i className="fal fa-bug"/>
                    </div>
                    <div className="details">
                        <div className="name">Reduce errors</div>
                        <div className="description">Compile time checking, avoid errors, safe time & eliminate invalid templates</div>
                    </div>
                </div>
                <div className="feature">
                    <div className="icon">
                        <i className="fal fa-compress-alt"/>
                    </div>
                    <div className="details">
                        <div className="name">Concise & Expressive </div>
                        <div className="description">Solving the same problems with fewer lines of code improving template maintainability and readability</div>
                    </div>
                </div>
                <div className="feature">
                    <div className="icon">
                        <i className="fal fa-lightbulb"/>
                    </div>
                    <div className="details">
                        <div className="name">Code-completion</div>
                        <div className="description">Analyses the current context and suggests choices to speed up your coding process</div>
                    </div>
                </div>
                <div className="feature">
                    <div className="icon">
                        <i className="fal fa-thumbs-up"/>
                    </div>
                    <div className="details">
                        <div className="name">Empowering</div>
                        <div className="description">Develop templates with the power of Kotlin bring together programming language features</div>
                    </div>
                </div>
                <div className="feature">
                    <div className="icon">
                        <i className="fal fa-shield-check"/>
                    </div>
                    <div className="details">
                        <div className="name">Type-Safe Builders</div>
                        <div className="description">Type-safe builders enable creating templates in a declarative way accomplishing more readable and maintainable solutions</div>
                    </div>
                </div>
            </div>
        </div>
    )
}