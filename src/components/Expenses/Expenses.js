import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'

export default function Expenses(props) {

    const [pickedYear, setPickedYear] = useState('2020')

    const pickedYearHandler = year => {
        setPickedYear(year)
    }

    return (
        <div>
            <ExpensesFilter onPickedYear = {pickedYearHandler} selected = {pickedYear} />
            <Card classname="expenses">
                {props.items.map((expense) => (
                    <ExpenseItem
                        key = {expense.id}
                        title = {expense.title}
                        amount = {expense.amount}
                        date = {expense.date}
                    />
                ))}
            </Card>
        </div>
        )

}