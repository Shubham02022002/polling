import React, { useEffect, useState } from "react";
import Todo from "./Todo.js";

interface Todo {
  id: string;
  title: string;
}
const Todo1 = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [id, setId] = useState(1);
  useEffect(() => {
    fetch("http://localhost:3000/todos/" + id)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        setTodos((prevTodo = []) => [...prevTodo, data.todo]);
      });
  }, [id]);

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} title={todo.title} />
      ))}
      <button
        onClick={() => {
          setId(Math.floor(Math.random() * 19 + 1));
        }}
      >
        Get todo
      </button>
    </div>
  );
};

export default Todo1;
