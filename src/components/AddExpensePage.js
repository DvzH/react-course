import React from 'react';
import { ExpenseForm } from "./ExpenseForm"
import { connect } from "react-redux"
import { startAddExpense } from "../actions/expenses";
import ExpenseDashboardPage from './ExpenseDashboardPage';

const AddExpensePage = (props) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Add Expense</h1>
      </div>
    </div>
    <div className="content-container">
      <ExpenseForm onSubmit={(expense) => {
        props.dispatch(startAddExpense(expense));
        props.history.push('/ExpenseDashboardPage');
      }
      }
      />
    </div>
  </div>
);

export default connect()(AddExpensePage);
