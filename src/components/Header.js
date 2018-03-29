import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage"

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
    <div className="header__content">
      <Link className="header__title" to="/ExpenseDashboardPage">
        <h1 style={{fontWeight:'bold'}}>Expensify</h1>
      </Link>
      <button className="button button--link" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

export const mapDispatchToProps = (Dispatch) => ({
  startLogout: () => Dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);

 // <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    // <NavLink to="/help" activeClassName="is-active">Help</NavLink>