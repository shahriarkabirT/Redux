const { INCREAMENT, DECREMENT, RESET } = require("../constants/counterConstants");

const initialCounter = {count:0}

const counterReducer = (state = initialCounter,action) =>{
    switch (action.type) {
        case INCREAMENT:
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