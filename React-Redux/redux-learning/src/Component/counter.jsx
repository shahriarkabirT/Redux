import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter,decrementCounter,reset } from '../Services/actions/counterAction';

const Counter = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch();

    const handleIncrement = () =>{
        dispatch(incrementCounter())
    }
    const handleDecrement = () =>{
        dispatch(decrementCounter())
    }
    const handleReset = () =>{
        dispatch(reset())
    }
  return(
    <>
    <p>{count}</p>
    <button onClick={handleIncrement}>+</button>
    <button onClick={handleReset}>Reset</button>
    <button onClick={handleDecrement}>-</button>
    </>
  )
}

export default Counter