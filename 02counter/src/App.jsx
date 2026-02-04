import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   let [counter , setCounter] = useState(10)
 
   const addValue = ()=> {


    console.log("clicked",counter);
    if (counter < 20){
      setCounter(counter + 1);
    }else console.log("counter exceeded")
    }

  const removeValue = ()=> {
    if (counter > 0){
      setCounter(counter - 1);
    }else console.log('zero')
    
    
  }

   return(
    <div>
      <h1>chai our react </h1>
      <h2>Counter value : {counter} </h2>

      <button onClick={addValue} >Add value {counter}</button>
      <br/>
      <button onClick ={removeValue} >Remove {counter} </button>

    </div>
   )



}

export default App
