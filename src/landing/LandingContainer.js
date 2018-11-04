import React from "react";
import "./landing.sass"
import Introduction from "./Introduction";
import Features from "./Features";
import Footer from "../common/Footer";


class LandingContainer extends React.Component {
    render() {
        return (
            <main>
                <Introduction />
                <Features />
                <Footer />
            </main>
        );
    }
}

export default LandingContainer;