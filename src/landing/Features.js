import React from "react";
import "./features.sass"

export default props => {
    return (
        <div className="featureList">
            <div className="title">Features</div>
            <div className="features">
                <div className="feature">
                    <div className="icon">
                        <i className="fal fa-shield-check "/>
                    </div>
                    <div className="details">
                        <div className="name">Model in Code</div>
                        <div className="description">Kloud Formation allows you to model your entire infrastructure in a text file.</div>
                    </div>
                </div>
                <div className="feature">
                    <div className="icon">
                        <i className="fal fa-shield-check "/>
                    </div>
                    <div className="details">
                        <div className="name">Infrastructure as Code</div>
                        <div className="description">Codifying your infrastructure allows you to treat your infrastructure as just code. You can author it with any code editor.</div>
                    </div>
                </div>
                <div className="feature">
                    <div className="icon">
                        <i className="fal fa-shield-check "/>
                    </div>
                    <div className="details">
                        <div className="name">Customizable</div>
                        <div className="description">You can easily read, edit, and write your own code, or change everything.</div>
                    </div>
                </div>
                <div className="feature">
                    <div className="icon">
                        <i className="fal fa-shield-check "/>
                    </div>
                    <div className="details">
                        <div className="name">Customizable</div>
                        <div className="description">You can easily read, edit, and write your own code, or change everything.</div>
                    </div>
                </div>
                <div className="feature">
                    <div className="icon">
                        <i className="fal fa-shield-check "/>
                    </div>
                    <div className="details">
                        <div className="name">Customizable</div>
                        <div className="description">You can easily read, edit, and write your own code, or change everything.</div>
                    </div>
                </div>
                <div className="feature">
                    <div className="icon">
                        <i className="fal fa-shield-check "/>
                    </div>
                    <div className="details">
                        <div className="name">Customizable</div>
                        <div className="description">You can easily read, edit, and write your own code, or change everything.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}