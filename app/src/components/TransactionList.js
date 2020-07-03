import React, { useEffect } from 'react'
import { Transaction } from './Transaction'
import { transactionListState } from '../recoil/atoms'
import { useRecoilState } from 'recoil'

export const TransactionList = () => {
    const [transactionList, setTransactionList] = useRecoilState(
        transactionListState
    )
    useEffect(() => {
        setTransactionList(JSON.parse(localStorage.getItem('TRANSACTION_LIST')))
    }, [setTransactionList])

    return (
        <>
            <h3>Transaction History</h3>
            <ul className="list">
                {transactionList !== null &&
                    transactionList.map((transaction) => (
                        <Transaction
                            key={transaction.id}
                            transaction={transaction}
                        />
                    ))}
            </ul>
        </>
    )
}
