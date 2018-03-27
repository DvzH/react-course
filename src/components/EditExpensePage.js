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
      Editing the expense with id of {props.match.params.id}
      <ExpenseForm
      expense={props.expense} 
      onSubmit={(expense)=>{
        props.dispatch(startEditExpense(props.match.params.id,expense));
        props.history.push('/ExpenseDashboardPage');
      }}
      />
      <button onClick={() => {
        props.dispatch(setRemoveExpenses({id:props.expense.id}));
        props.history.push('/ExpenseDashboardPage');
    }
    }>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };

};

export default connect(mapStateToProps)(EditExpensePage);
