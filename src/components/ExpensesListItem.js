import React from "react";
import { removeExpense } from "../actions/expenses"
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import ExpensesTotal from './Expenses-Total';

const ExpensesListItem = ({ id, description, amount, createdAt }) => (
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__title" style={{fontWeight:'bold'}}>{description}</h3>
            <span className="list-item__sub-title"> {moment(createdAt).format('MMMM Do,YYYY')}</span>
        </div>
        <h3 className="list-item__data" style={{fontWeight:'bold'}}>
            {numeral(amount).format('$0,0.00')}
        </h3>
    </Link>
);

export default ExpensesListItem;