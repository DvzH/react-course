import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";
import Header from "../components/Header";


export const PrivateRouter = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props} />
            </div>
        ) : (
                <Redirect to="/" />
            )
    )} />
);

export const mapStateToProps = (state) => {
   return{ isAuthenticated: !!state.auth.uid};
}

export default connect(mapStateToProps)(PrivateRouter);