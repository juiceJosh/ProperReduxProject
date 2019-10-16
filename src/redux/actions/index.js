import {LOGIN, DELETE_LOG, USER_INPUT, PASSWORD_INPUT} from './actionTypes'


// export const userIn = user =>{
//     return {
//         type: USER_INPUT,
//         payload: user
//     }
// }
// export const passIn = password =>{
//     return {
//         type: PASSWORD_INPUT,
//         payload: password
//     }
// }
export const login = (user, password)=> {
    return{
        type: LOGIN,
        payload: { user, password }
    }
}
export const delete_Log = (index)=>{
    return{
        type: DELETE_LOG,
        payload: index
    }
}