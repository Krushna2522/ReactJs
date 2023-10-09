import {useState} from 'react'
import './App.css';

function App() {
  let [counter,setCounter]=useState(15);
  function incrmentValue(){
    // counter=counter+1;
    // console.log(counter);
    if(counter===20){
      setCounter(20);
    }
    else{
    setCounter(counter+1);
    }
  }
  function decrementValue(){
    // counter=counter-1;
    // console.log(counter);
    if(counter===0)
    {
      setCounter(0);
    }
    else{
      setCounter(counter-1);
    }
  }
  return (
    <div className="App-header">
      <div>Increment and Decrement between 0 to 20</div>
      <div>Counter Current Value:{counter}</div>
      <button
        onClick={incrmentValue}
      >Increment</button>
      <br/>
      <button
        onClick={decrementValue}
      >Decrement</button>      
    </div>
  );
}

export default App;
