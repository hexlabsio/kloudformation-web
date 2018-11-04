import React from "react";

import {Route} from "react-router-dom";

import Header from "../common/Header";

import LandingContainer from "../landing/LandingContainer";

const Routes = () => {
    return (
    <div className="site">
        <Header/>
        <Route path="/" component={LandingContainer}/>
    </div>
)};

export default Routes;