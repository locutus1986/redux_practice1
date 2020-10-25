import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement } from './actions'


function App() {
  const counter = useSelector(state => state.counterReducer)
  const isLogged = useSelector(state => state.islogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: { counter }</h1>
      <input></input>
      <button onClick={()=>dispatch(increment(5))}>+</button> <br /> 
      <input type='text' id='increment'></input> 
      <button onClick={()=>dispatch(decrement())}>-</button>       

      {isLogged ?  <h3>Only seend is logged in</h3> : ""}
     
      

    </div>
  );
}

export default App;
