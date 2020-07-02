import { transactionListState } from './atoms'
import { selector } from 'recoil'

export const balanceState = selector({
    key: 'balanceState',
    get: ({ get }) => {
        const transactionList = get(transactionListState)
        const amounts = transactionList.map((transaction) => transaction.amount)
        const balance = amounts.reduce((acc, num) => (acc += num), 0).toFixed(2)

        return balance
    },
})

export const expenseStatsState = selector({
    key: 'expenseStatsState',
    get: ({ get }) => {
        const transactionList = get(transactionListState)
        const amounts = transactionList.map((transaction) => transaction.amount)
        const income = amounts
            .filter((num) => num >= 0)
            .reduce((acc, num) => (acc += num), 0)
            .toFixed(2)

        const expense =
            amounts
                .filter((num) => num < 0)
                .reduce((acc, num) => (acc += num), 0) * -(1).toFixed(2)

        return {
            income,
            expense,
        }
    },
})
