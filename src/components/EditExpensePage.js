import React from 'react';
import { connect } from 'react-redux'
import { ExpenseForm } from './ExpenseForm';
import { editExpense, setRemoveExpenses, startEditExpense } from '../actions/expenses';
import ExpenseDashboardPage from './ExpenseDashboardPage';

const EditExpensePage = (props) => {
  console.log(props);
  debugger;
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Expense</h1>
        </div>
      </div>
    <div className="content-container">
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(startEditExpense(props.match.params.id, expense));
          props.history.push('/ExpenseDashboardPage');
        }}
      />
      <button className="button button--secondary" onClick={() => {
        props.dispatch(setRemoveExpenses({ id: props.expense.id }));
        props.history.push('/ExpenseDashboardPage');
      }
      }>Remove Expense</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };

};

export default connect(mapStateToProps)(EditExpensePage);

 //Editing the expense with id of {props.match.params.id}
