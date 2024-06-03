const {createStore,applyMiddleware} = require("redux");
const {default: logger} = require("redux-logger");


//defining constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";
const incValue = "IncValue";

//state

const initialcounterState = {
    hello: 0,
    count: 0,
    newCount: 5,
};
const initialUserState = {
      user:[{name:"Shahriar"}],
      count:1,
}
//action - object - type, payload
const increamentCounter =()=>{
    return{
        type: INCREMENT

    };
}
const increamentByValue = (value) =>{
    return{
        type: incValue,
        payload: value
    }
}
const decreamentCounter =()=>{
    return{
        type: DECREMENT

    };
}
const addUser = (name) => {
    return {
        type:ADD_USER,
        payload:name,
    }
 }

 const Reducer = (state = initialUserState,action) => {
    switch (action.type){

        case INCREMENT:
            return{
               ...state,
                hello: state.hello + 2
            };
        case DECREMENT:
            return{
               ...state,
                hello: state.hello - 2
            };
        case incValue:
            return{
                ...state,
                newCount: state.newCount + action.payload,
            }
        case ADD_USER:
            return{
                user:[...state.user, {name: action.payload}],
                count : state.count + 1
            }
        default:
            return state;
    }
 }



// 1. State
// 2. Dispatch Action
// 3. Reducer
// 4. Store - getState(),dispatch(),subscribe(),

//createStore

const store = createStore(Reducer,applyMiddleware(logger));

store.subscribe(()=>{
    console.log(store.getState());
})

// store.dispatch(increamentCounter());
// store.dispatch(decreamentCounter());
// store.dispatch(increamentCounter());
// store.dispatch(increamentCounter());
store.dispatch(addUser("Shadhin"));
store.dispatch(addUser("Shuvo"));
