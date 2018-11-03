import React from "react";
import {connect} from "react-redux";
import "./landing.sass"
import Introduction from "./Introduction";
import Features from "./Features";


class LandingContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <main>
                <Introduction />
                <Features />
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = () => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);