import React from 'react';
import { Connect, connect } from 'react-redux';
import ExpensesTotal from './Expenses-Total';
import SelectExpenses from "../selectors/expenses";
import numeral from "numeral";
import {Link} from "react-router-dom";

const ExpensesSummary = ({ expenseCount, ExpensesTotal }) => {
    const expenseWord = (expenseCount === 1) ? 'expense' : 'expenses';
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling 
                 <span> {numeral(ExpensesTotal).format('$0,0.00')}</span></h1>
                 <div className="page-header__actions">
                 <Link className="button" to="/create">Add Expense</Link>
                 </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = SelectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        ExpensesTotal: ExpensesTotal(visibleExpenses)
    }

}

export default connect(mapStateToProps)(ExpensesSummary);