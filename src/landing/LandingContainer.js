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
                <Features />
                <Playground />
                <Footer />
            </main>
        );
    }
}

export default LandingContainer;