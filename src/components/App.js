import React, { useRef, useState } from 'react'
import '../styles/App.css';

const App = () => {
  const expenseInput =  useRef("");
  const[expenseList , setExpenseList] = useState([]);
  const[totalExpense , setTotalexpense] = useState(0);
  const addExpenseHandler = () => {
    setExpenseList(prevList => {
      let newList = [...prevList , expenseInput.current.value];
      console.log(newList);
      let expense = expenseInput.current.value.split("-");
      setTotalexpense(prevExp => prevExp + parseInt(expense[1].trim()))  
      return newList;
    })    
  }
  return (
    <div id="main">
      <input id="expense-input" ref={expenseInput}/>
      <button id="expense-button" onClick={addExpenseHandler}>Add Expense</button>
      <div id="expense-list">
        {expenseList.map(expense => (<li key={expense}> {expense}</li>))}
      </div>
      <div id="total-expense">
        Total Expense: {totalExpense}
      </div>
    </div>
  )
}


export default App;
