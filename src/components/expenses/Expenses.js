import React, { useState } from 'react'
import Card from '../common/Card'
import './Expenses.css'
import ExpensesChart from './ExpensesChart'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const changeExpenseFilterHandler = (selectedExpenseFilterValue) => {
    setFilteredYear(selectedExpenseFilterValue)
  }

  const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear().toString() === filteredYear)

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeExpenseFilter={changeExpenseFilterHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses
