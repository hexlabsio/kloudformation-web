import React from "react";

import {connect} from "react-redux";
import {Route} from "react-router-dom";

import Header from "../common/Header";
import Footer from "../common/Footer";

import LandingContainer from "../landing/LandingContainer";

const Routes = () => {
    return (
    <div className="site">
        <Header/>
        <Route exact path="/" component={LandingContainer}/>
        <Footer/>
    </div>
)};

export default connect(null, null , null, {pure: false})(Routes);