import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

export default function Expenses(props) {

    const [pickedYear, setPickedYear] = useState('2020')

    const pickedYearHandler = year => {
        setPickedYear(year)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === pickedYear
    })

    return (
        <div>
            
            <Card classname="expenses">
                <ExpensesFilter onPickedYear = {pickedYearHandler} selected = {pickedYear} />
                <ExpensesChart expenses = {filteredExpenses} />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
        )

}