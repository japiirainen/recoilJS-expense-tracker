import React, { useState, useEffect } from 'react'
import { transactionListState } from '../recoil/atoms'
import { useRecoilState } from 'recoil'
import { v4 as uuidv4 } from 'uuid'

export const NewTransaction = () => {
    const [textValue, setTextValue] = useState('')
    const [amount, setAmount] = useState(0)
    const [transactionList, setTransactionList] = useRecoilState(
        transactionListState
    )

    const NewTransaction = (e) => {
        e.preventDefault()
        setTransactionList((oldTransactionList) => [
            ...oldTransactionList,
            {
                id: uuidv4(),
                amount: +amount,
                text: textValue,
            },
        ])
        setTextValue('')
        setAmount(0)
    }
    useEffect(() => {
        localStorage.setItem(
            'TRANSACTION_LIST',
            JSON.stringify(transactionList)
        )
    }, [transactionList])

    const handleTextValue = (e) => {
        setTextValue(e.target.value)
    }
    const handleAmount = (e) => {
        setAmount(e.target.value)
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Description</label>
                    <input
                        type="text"
                        placeholder="Enter text..."
                        value={textValue}
                        onChange={handleTextValue}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input
                        type="number"
                        placeholder="Enter amount..."
                        value={amount}
                        onChange={handleAmount}
                    />
                </div>
                <button className="btn" onClick={NewTransaction}>
                    Add transaction
                </button>
            </form>
        </>
    )
}
