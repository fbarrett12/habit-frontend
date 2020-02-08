let defaultState = {
    user: {},
    routine: {},
    taskList: [],
    userTasks: []
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

        case 'SET_TASK':
            return {
                ...state,
                taskList: [...state.taskList, action.payload]
            }
        
        case 'SET_USER_TASK':
            return {
                ...state,
                userTasks: [...state.userTasks, action.payload]
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
