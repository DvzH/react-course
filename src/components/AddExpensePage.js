import React from 'react';
import { ExpenseForm } from "./ExpenseForm"
import { connect } from "react-redux"
import { startAddExpense } from "../actions/expenses";
import ExpenseDashboardPage from './ExpenseDashboardPage';

const AddExpensePage = (props) => (
  <div>
    This is from my add expense component
    <h1>Add Expense</h1>
    <ExpenseForm onSubmit={(expense) => {
      props.dispatch(startAddExpense(expense));
      props.history.push('/ExpenseDashboardPage');
    }
  } />
  </div>
);

export default connect()(AddExpensePage);
