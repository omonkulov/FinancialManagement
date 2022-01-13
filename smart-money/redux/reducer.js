/**
 * Store
{
    "totalToday": 124.53,
    "totalWeek" : 2332,
    "totalMonth": 2323,
    "transactions": [
        {
            "date": "12:24",
            "amount": -40.24
            "label" : "Food",
            "name": "Chipotle"
        }
    ]
}

 */

let lastId = 0

const initialState = {
    totalToday: 0,
    totalWeek: 0,
    totalMonth: 0,
    totalYear: 0,
    total: 0,
    transactions: [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'transactionEntry':
            return {
                ...state,
                transactions: [
                    ...state.transactions,
                    {
                        id: ++lastId,
                        date: action.payload.date,
                        amount: action.payload.amount,
                        name: action.payload.name,
                        label: action.payload.label,
                    },
                ],
            }
        case 'transactionRemove':
            console.log(`Transaction #${action.payload.id} needs to be removed, but no code to run`)
            return state
        case 'transactionEdit':
            console.log(`Transaction #${action.payload.id} needs to be edited, but no code to run`)
            return state
        default:
            return state
    }
}
