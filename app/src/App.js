import React from 'react'
import './App.css'
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { ExpenseStatus } from './components/ExpenseStatus'
import { TransactionList } from './components/TransactionList'
import { NewTransaction } from './components/NewTransaction'

const App = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Balance />
                <ExpenseStatus />
                <TransactionList />
                <NewTransaction />
            </div>
        </>
    )
}

export default App
