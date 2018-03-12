import React from 'react';
import ExpensesList from './ExpensesList'
import ExpensesTotal from './Expenses-Total';
import ExpensesSummary from './Expenses-Summary';

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpensesList />
  </div>
);

export default ExpenseDashboardPage;
