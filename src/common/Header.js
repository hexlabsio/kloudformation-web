import React from "react";
import "./header.sass"
import logo from "../asset/image/kloudformation-logo-white.png"

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <a href="https://github.com/hexlabsio/kloudformation-specification-generator">
                        <img alt="Kloud Formation logo" src={logo} />
                    </a>
                </div>
                <nav>
                    <div>
                        <a href="https://github.com/hexlabsio/kloudformation-specification-generator">
                            <i className="fal fa-file-alt"/>
                            Documentation
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/hexlabsio/kloudformation-specification-generator">
                            <i className="fab fa-github"/>
                            GitHub
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/hexlabsio/kloudformation-specification-generator">
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