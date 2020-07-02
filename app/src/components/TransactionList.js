import React from 'react'
import { Transaction } from './Transaction'
import { transactionListState } from '../recoil/atoms'
import { useRecoilValue } from 'recoil'

export const TransactionList = () => {
    const transactionList = useRecoilValue(transactionListState)

    return (
        <>
            <h3>Transaction History</h3>
            <ul className="list">
                {transactionList.map((transaction) => (
                    <Transaction
                        key={transaction.id}
                        transaction={transaction}
                    />
                ))}
            </ul>
        </>
    )
}
