import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState();
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //pentru local
  // useEffect(() => {
  //   getLocalTodos();
  // }, []);
  useEffect(() => {
    filterHandler();
    //saveLocalTodos();
  }, [todos, status]);
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

  //Save to Local
  /*
  //punem in local ce avem
  const saveLocalTodos = () => {
    if (todos.length > 0) localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    //daca nu avem nimic setam un empty array
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    //daca avem parsam si setam stateul
    else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };
*/
  return (
    <div className="App">
      <header>
        <h1>Bobita's Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
