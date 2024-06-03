import { INCREMENT, DECREMENT, RESET } from "../constants/counterConstants";

const initialCounter = {count:5}

const counterReducer = (state = initialCounter,action) =>{
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count: state.count+1,
            }
        case DECREMENT:
            return{
                ...state,
                count: state.count-1,
            }
        case RESET:
            return{
                ...state,
                count:0,
            }
        default:
            return state;
    }
}
export default counterReducer


// 1. state - count : 0
// 2. actions - increment, decrement, reset
// 3. reducer - increment -> count -> count +1 
// 4. store
// 5. providing store in react
// 6. use store 