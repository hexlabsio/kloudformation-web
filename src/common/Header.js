import React from "react";
import "./header.sass"
import logo from "../asset/image/kloudformation-logo-white.png"

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <a href="/">
                        <img alt="KloudFormation logo" src={logo} />
                    </a>
                </div>
                <nav>
                    <div>
                        <a href="https://hexlabsio.github.io/kloudformation/get-started/get-started.html">
                            <i className="fal fa-file-alt"/>
                            Documentation
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/hexlabsio/kloudformation">
                            <i className="fab fa-github"/>
                            GitHub
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/hexlabsio/kloudformation/blob/master/LICENSE">
                            <i className="fal fa-certificate"/>
                            License
                        </a>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header