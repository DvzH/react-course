import React from "react";
import {removeExpense} from "../actions/expenses"
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import ExpensesTotal from './Expenses-Total';

const ExpensesListItem = ({ id, description, amount, createdAt }) => (
    <div>
    <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
    </Link>
    
    <p>
    {numeral(amount).format('$0,0.00')}
    -
    {moment(createdAt).format('MMMM Do,YYYY')}
    </p>
    
    </div>
);

export default ExpensesListItem;