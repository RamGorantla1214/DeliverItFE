import { initialState } from '../store'

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_STATE':
            return {
                ...state,
                address: action.payload
            }
        case 'SET_EIRCODE':
            return {
                ...state,
                eircode: action.payload
            }
        case 'SET_PICKUP':
            return {
                ...state,
                pickup_address: {
                    ...state.pickup_address,
                    pickup: [...action.payload]
                }
            }
        case 'SET_DROP':
            return {
                ...state,
                pickup_address: {
                    ...state.pickup_address,
                    drop: [...action.payload]
                }
            }
        case 'SET_DATE':
            return {
                ...state,
                pickup_address: {
                    ...state.pickup_address,
                    date: [...action.payload]
                }
            }
        case 'SET_INSTRUCTIONS':
            return {
                ...state,
                pickup_address: {
                    ...state.pickup_address,
                    instructions: [...action.payload]
                }
            }
        default:
            return state
    }
}

export default rootReducer