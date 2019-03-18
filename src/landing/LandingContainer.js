import React from "react";
import "./landing.sass"
import Introduction from "./Introduction";
import Features from "./Features";
import Playground from "./Playground";
import Footer from "../common/Footer";


class LandingContainer extends React.Component {
    render() {
        return (
            <main>
                <Introduction />
                <div className="install-snippet">
                    <pre><span id="dollar">$</span> curl -s <span>https://install.kloudformation.hexlabs.io</span> | sh</pre>
                </div>
                <Features />
                <Playground />
                <Footer />
            </main>
        );
    }
}

export default LandingContainer;