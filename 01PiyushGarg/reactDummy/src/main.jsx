import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function add(x,y){
  return x+y;
}

function Mycomponent(){
  const name = 'jaydeep yadav'
  return <h2>my name is {name} and the sum is {add(35,15)}</h2>
}



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mycomponent/>

  </StrictMode>
)