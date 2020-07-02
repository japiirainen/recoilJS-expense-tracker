import { atom } from 'recoil'

export const transactionListState = atom({
    key: 'transactionListState',
    default: [
        {
            id: 1,
            amount: 10,
            text: 'some text!',
        },
        {
            id: 2,
            amount: -110,
            text: 'more text!',
        },
        {
            id: 3,
            amount: 300,
            text: 'text!',
        },
    ],
})
