import React from "react";
import { connect } from "react-redux";
import ExpensesListItem from "./ExpensesListItem";
import SelectExpenses from "../selectors/expenses"
import ExpenseListFilters from "../components/ExpenseListFilters"

export const ExpensesList = (props) => (
    <div className="content-container">
        <ExpenseListFilters />
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>

        </div>

        <div className="list-body">
            <div>
                {
                    props.expenses.length === 0 ? (
                        <div className="list-item list-item--message">
                            <span>No expenses</span>
                        </div>
                    ) : (
                            props.expenses.map((expense) => {
                                return (<ExpensesListItem key={expense.id} {...expense} />);
                            })
                        )
                }
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: SelectExpenses(state.expenses, state.filters)
    }
}
export default connect(mapStateToProps)(ExpensesList);