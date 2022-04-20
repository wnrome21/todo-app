import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  
  //State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Use Effect
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  //Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setStatus={setStatus}
        filteredTodos={filteredTodos}
      />
      <TodoList 
      todos={todos} 
      setTodos={setTodos} 
      filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
