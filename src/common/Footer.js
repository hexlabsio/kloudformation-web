import React from "react";
import "./footer.sass"

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="details">
                    <div className="development">
                        <div className="contributors">
                            Kloud Formation is designed and developed open source on <a href="https://github.com/hexlabsio">GitHub</a>
                        </div>
                        <div className="support">
                            with support from <a href="https://hexlabs.io">HexLabs</a>
                        </div>
                    </div>
                    <div className="usefulLinks">
                       <div className="usefulLink">
                           <a href="https://github.com/hexlabsio/kloudformation-specification-generator">Documentation</a>
                       </div>
                        <div className="usefulLink">
                            <a href="https://github.com/hexlabsio/kloudformation-specification-generator">GitHub</a>
                        </div>

                        <div className="usefulLink">
                            <a href="https://github.com/hexlabsio/kloudformation-specification-generator">License</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;