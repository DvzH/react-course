import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, startAddExpense, startSetExpenses } from './actions/expenses';
import { setTextFilter, setStartDate } from './actions/filters';
import {Login,Logout} from './actions/auth'
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import { EmployeeTable } from './components/EmployeeJSX';
import { firebase } from './firebase/firebase';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();


// store.dispatch(addExpense({ description: 'Gas bill',createdAt:1000}));
// store.dispatch(addExpense({ description: 'Rent',amount:109500}));

// console.log(store.getState());
// console.log("test");

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <div>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </div>
);

let hasRendered = false;
const renderApp = () => {
    debugger;
    if (!hasRendered) {
         ReactDOM.render(jsx, document.getElementById('app'));
         hasRendered = true;
    }
}

ReactDOM.render(<img style={{display: 'centre'}} 
src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />, 
document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        debugger;
        console.log("Log in");
        console.log(user.uid);
        store.dispatch(Login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
              history.push('/dashboard');
            }
          });
    }
    else {
        debugger;
        store.dispatch(Logout());
        renderApp();
        history.push('/');
        console.log("logged out");
    }
})
