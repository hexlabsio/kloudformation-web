import React from "react";
import "./introduction.sass"
import Typed from 'react-typed';

export default props => {
    return (
        <div className="introduction">
            <div className="showcase">
                <div className="title">KloudFormation is built for <span className="typed">
                        <Typed strings={['Safety', 'Brevity', 'Lucidity']} typeSpeed={100} backSpeed={100} loop />
                </span>
                </div>
                <div className="sub">KloudFormation is a one-to-one mapping of Amazon’s CloudFormation generated into a Kotlin library allowing users to write type safe stacks in Kotlin.</div>
                <div className="action">
                    <a href="https://hexlabsio.github.io/kloudformation/get-started/get-started.html">
                    <div className="button">
                        <span>Learn KloudFormation</span>
                        <i className="fal fa-search" />
                    </div>
                    </a>
                </div>
            </div>
        </div>
    )
}