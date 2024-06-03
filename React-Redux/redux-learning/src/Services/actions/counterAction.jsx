import { DECREMENT, INCREAMENT, RESET } from "../constants/counterConstants"

export const incrementCounter = () =>{
    return{
        type: INCREMENT
    }
}
export const decrementCounter = () =>{
    return{
        type: DECREMENT
    }
}
export const reset = () =>{
    return{
        type: RESET
    }
}