import React from 'react';
import {Connect, connect} from 'react-redux';
import ExpensesTotal from './Expenses-Total';
import SelectExpenses from "../selectors/expenses";

const ExpensesSummary=({expenseCount,ExpensesTotal })=>{
    const expenseWord=(expenseCount===1) ?'expense':'expenses';
    return(
        <div>
        <h1>Viewing {expenseCount} {expenseWord} totalling {ExpensesTotal}</h1>
        </div>
    )
}

const mapStateToProps=(state)=>{
    const visibleExpenses=SelectExpenses(state.expenses,state.filters);
    return{
        expenseCount:visibleExpenses.length,
        ExpensesTotal:ExpensesTotal(visibleExpenses)
    }

}

export default connect(mapStateToProps)(ExpensesSummary);