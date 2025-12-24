import { useEffect, useState } from "react";
import Todo from "./components/Todo.js";
import useTodo from "./hooks/useTodo.js";
import React from "react";

const App = () => {
  const todos = useTodo();
  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} title={todo.title} />
      ))}
    </>
  );
};

export default App;
