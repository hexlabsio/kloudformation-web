import React from "react";
import "./introduction.sass"
import Typed from 'react-typed';

export default props => {
    return (
        <div className="introduction">
            <div className="showcase">
                <div className="title">Kloud Formation is built for <span className="typed">
                        <Typed strings={['Saftey', 'Brevity', 'Lucidity']} typeSpeed={100} backSpeed={100} loop />
                </span>
                </div>
                <div className="sub">Kloud Formation provides a Kotlin based Domain Specific Language for producing Amazon Web Service Cloud Formation templates</div>
                <div className="action">
                    <a href="https://github.com/hexlabsio/kloudformation-specification-generator">
                    <div className="button">
                        <span>Learn Kloud Formation</span>
                        <i className="fal fa-search" />
                    </div>
                    </a>
                </div>
            </div>
        </div>
    )
}