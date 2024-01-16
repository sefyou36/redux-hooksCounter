import './App.css'
import { useSelector,useDispatch } from 'react-redux'


function App() {
  const counter = useSelector(state => state.counter)
const dispatch = useDispatch();

const increment = ()=>{
    dispatch({type:"INC"});
}
const decrement = ()=>{
    dispatch({type:"DEC"});
}
const addByTen = ()=>{
    dispatch({type:"TEN"});
}
const reset = () =>{
    dispatch({type:"RES"});
}
const addByState =(amount) => {
    dispatch({type:"ADD", payload: amount});
}

  return (
    <>
    <h1>Hello from Counter</h1>
      {counter}
      <button onClick ={increment} >increment</button>
      <button onClick ={decrement} >decrement</button>
      <button onClick ={addByTen} >addByTen</button>
      <button onClick ={() => { addByState(100000000) }}>addByState</button>
      <button onClick ={reset} >reset</button>
    </>
  )
}

export default App
