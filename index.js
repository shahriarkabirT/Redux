//defining constant
const INCREAMENT = "INCREAMENT";
const DECREAMENT = "DECREAMENT";
const ADD_USER = "ADD_USER";

//state

const initialcounterState = {
    count:0
};
const initialUserState = {
      user:[{name:"Shahriar"}],
}
//action - object - type, payload
const increamentCounter =()=>{
    return{
        type:INCREAMENT,

    };
}
const decreamentCounter =()=>{
    return{
        type:DECREAMENT,

    };
}
const addUser = () => {
    return {
        type:ADD_USER,
        payload:"Shihab",
    }
 }


