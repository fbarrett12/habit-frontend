let defaultState = {
    user: {},
    routine: {}
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

        default:
            return state
    }
}
