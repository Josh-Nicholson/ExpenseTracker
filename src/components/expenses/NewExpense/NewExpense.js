import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData)
  }

  const formVisibilityHandler = (visible) => {
    setIsEditing(visible)
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={formVisibilityHandler}>Add new Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} showExpenseForm={formVisibilityHandler} />}
    </div>
  )
}

export default NewExpense
