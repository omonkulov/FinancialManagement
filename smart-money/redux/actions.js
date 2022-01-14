export const addTransaction = (date, amount, label, name) => ({
    type: 'transactionEntry',
    payload: {
        date,
        amount,
        name,
        label,
    },
})

export const deleteTransaction = (id) => ({
    type: 'transactionRemove',
    payload: id,
})

export const deleteLastTransaction = () => ({
    type: 'transactionRemoveLast',
})

export const deleteAllTransactions = () => ({
    type: 'transactionDeleteAll',
})

export const editTransaction = (id) => ({
    type: 'transactionEdit',
    payload: id,
})
