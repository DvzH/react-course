import uuid from 'uuid';
import { database } from 'firebase';
import firebase from 'firebase';

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return ((dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = { description, note, amount, createdAt }

    firebase.database().ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    })
  })
}

// REMOVE_EXPENSE
export const removeExpense = ({id}={}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

//SET_EXPENSE
export const setExpense=(expenses)=>({
  type:'SET_EXPENSES',
  expenses
});

//SET_START_EXPENSES
export const startSetExpenses = () => {
  return ((dispatch) => {
    return firebase.database().ref('expenses').once('value').then((snapshot) => {
      const expenses = [];
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id:childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setExpense(expenses));
    });
  });
}

//SET_REMOVE_EXPENSE
export const setRemoveExpenses=({id}={})=>{
  debugger;
  return((dispatch)=>{
    firebase.database().ref(`expenses/${id}`).remove().then((ref)=>{
      dispatch(removeExpense({id}));
    });
  });
}

//startEditExpense
export const startEditExpense=(id,expenseData={})=>{
  const {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = expenseData;

  const expense = { description, note, amount, createdAt }

  return((dispatch)=>{
    firebase.database().ref(`expenses/${id}`).update({ description, note, amount, createdAt })
    .then(()=>{
      dispatch(editExpense(id,expense));
    })
  });

}