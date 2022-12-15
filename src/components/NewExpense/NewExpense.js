import React, { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'

const NewExpense = (props) => {

  const [viewForm, setViewForm] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
      };

      const viewFormHandler = () => {
        setViewForm(true)
      }

      const hideFormHandler = () => {
        setViewForm(false)
      }
    
      return (
        <div className='new-expense'>
          {!viewForm && <button onClick={viewFormHandler}>Add new expense</button>}
          {viewForm && <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler} 
            onCancel = {hideFormHandler}
          />}
        </div>
      );
}

export default NewExpense