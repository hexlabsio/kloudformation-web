import React from "react";
import "./footer.sass"

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="details">
                    <div className="development">
                        <div className="contributors">
                            KloudFormation is developed on <a href="https://github.com/hexlabsio">GitHub</a>
                        </div>
                        <div className="support">
                            with support from <a href="https://hexlabs.io">HexLabs</a>
                        </div>
                    </div>
                    <div className="usefulLinks">
                       <div className="usefulLink">
                           <a href="https://hexlabsio.github.io/kloudformation/get-started/get-started.html">Documentation</a>
                       </div>
                        <div className="usefulLink">
                            <a href="https://github.com/hexlabsio/kloudformation">GitHub</a>
                        </div>

                        <div className="usefulLink">
                            <a href="https://github.com/hexlabsio/kloudformation/blob/master/LICENSE">License</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;