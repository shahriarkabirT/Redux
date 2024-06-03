import { INCREMENT,DECREMENT, RESET } from "../constants/counterConstants.jsx"

export const decrementCounter = () =>{
    return{
        type: DECREMENT
    }
}

export const incrementCounter = () =>{
    return{
        type: INCREMENT
    }
}
export const reset = () =>{
    return{
        type: RESET
    }
}