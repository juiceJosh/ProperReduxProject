import {LOGIN, DELETE_LOG, USER_INPUT, PASSWORD_INPUT} from '../actions/actionTypes'

const initialState = {
    // user: "",
    // password: "",
    credentials: [
        {id: 1, user: 'Juice', password: '1234567890' },
        {id: 2, user: 'Box', password: '0987654321' },
    ]
}

//https://daveceddia.com/react-redux-immutability-guide/

export default (state=initialState, action) => {
    switch(action.type){
        case LOGIN:
            const addLog = state.credentials
            const {user, password} = action.payload
            const userAdded = {id: addLog.length + 1, user, password}
            console.log(userAdded)
            console.log(addLog)
            return {
                credentials: [...addLog,userAdded ]
            }
                
        case DELETE_LOG:
            const delLog  = state.credentials
            return {    
                ...state,
                credentials: delLog.filter(logId => logId.id !== action.payload)
            }   
        default:
            return state;
    }
}
