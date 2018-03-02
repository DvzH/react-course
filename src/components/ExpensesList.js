import React from "react";
import { connect } from "react-redux";
import ExpensesListItem from "./ExpensesListItem";
import SelectExpenses from "../selectors/expenses"
import ExpenseListFilters from "../components/ExpenseListFilters"

const ExpensesList = (props) => (
    <div>
        <ExpenseListFilters />
        <h1>Expenses List</h1>
        {
            props.expenses.map((expense) => {
                return (<ExpensesListItem key={expense.id} {...expense} />);
            })
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: SelectExpenses(state.expenses, state.filters)
    }
}
export default connect(mapStateToProps)(ExpensesList);