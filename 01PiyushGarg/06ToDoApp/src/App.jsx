import React from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";
import './app.css'
import CounterComponent from "./components/Counter";

import Timer from "./components/TimerUseEffect";

const App = () => {
  return (
    <div className="todo-container">
      {/* <Header headerContent="To Do App" />
      <TodoItem text="Eat" />
      <TodoItem text="Play"/>
      <TodoItem text="study"/>
      <TodoItem text="bath" />
      <TodoItem text="sleep again" />
      <Button />
      <CounterComponent/> */}
     
     <Timer/>

    </div>
  );
};

export default App;
