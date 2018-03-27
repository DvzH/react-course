import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from "react-redux";
import {startLogout} from "../actions/auth";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage"

export const Header = ({startLogout}) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/ExpenseDashboardPage" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    <button onClick={startLogout}>Log out</button>
  </header>
);

export const mapDispatchToProps=(Dispatch)=>({
  startLogout:()=>Dispatch(startLogout())
});

export default connect(undefined,mapDispatchToProps)(Header);
