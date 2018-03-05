import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter, setStartDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import {EmployeeTable} from './components/EmployeeJSX'

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();


// store.dispatch(addExpense({ description: 'Gas bill',createdAt:1000}));
// store.dispatch(addExpense({ description: 'Rent',amount:109500}));

console.log(store.getState());
console.log("test");

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


ReactDOM.render(jsx, document.getElementById('app'));
