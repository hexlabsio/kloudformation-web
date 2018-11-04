import React from "react";

import {Route} from "react-router-dom";

import Header from "../common/Header";
import Footer from "../common/Footer";

import LandingContainer from "../landing/LandingContainer";

const Routes = () => {
    return (
    <div className="site">
        <Header/>
        <Route path="/" component={LandingContainer}/>
        <Footer/>
    </div>
)};

export default Routes;