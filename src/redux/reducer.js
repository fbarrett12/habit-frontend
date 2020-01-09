let defaultState = {
    user: {},
    routine: {},
    selectedRoutine: {}
}

export default function reducer(state = defaultState, action){
    switch(action.type) {
        case 'SET_USER' :
            return {
                ...state,
                user: action.payload 
            }

        case 'CLEAR_USER': 
            return {
                ...state,
                user: {}
            }

        case 'SET_ROUTINE' :
            return {
                ...state,
                routine: action.payload 
            }

        case 'SELECT_ROUTINE':
            return {
                ...state,
                selectedRoutine: action.payload
            }
            
            case 'CLEAR_ROUTINE':
                return {
                    ...state,
                    routine: {}
                }

        default:
            return state
    }
}
