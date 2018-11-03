import React from "react";
import {connect} from "react-redux";
import "./footer.sass"

class Footer extends React.Component {
    render() {
        return (
            <footer>
            </footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);