import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

export const PublicRouter = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={() => (
        isAuthenticated ? (
            <div>
                <Redirect to="/ExpenseDashboardPage"  />
            </div>
        ) : (
                <Redirect to="/" />
            )
    )} />
);

export const mapStateToProps = (state) => {
   return{ isAuthenticated: !!state.auth.uid};
}

export default connect(mapStateToProps)(PublicRouter);

