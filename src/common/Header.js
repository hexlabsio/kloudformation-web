import React from "react";
import {connect} from "react-redux";
import "./header.sass"
import logo from "../asset/image/kloudformation-logo-white.png"

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <a href="https://github.com/hexlabsio/kloudformation-specification-generator">
                        <img src={logo} />
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

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = () => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);