import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import { EmployeeTable } from '../components/EmployeeJSX';
import LoginPage from '../components/LoginPage';
import PrivateRouter from './PrivateRouter'

export const history=createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <PrivateRouter path="/ExpenseDashboardPage" component={ExpenseDashboardPage} exact={true} />
        <PrivateRouter path="/create" component={AddExpensePage} />
        <PrivateRouter path="/edit/:id" component={EditExpensePage} />
        <PrivateRouter path="/help" component={HelpPage} />
        <Route path="/EmployeeTable" component={EmployeeTable} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
