import { useState, useEffect } from "react";
interface Todo {
  id: string;
  title: string;
}
export default function useTodo(): Todo[] {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  useEffect(() => {
    setInterval(() => {
      fetch("http://localhost:3000/todos")
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          setTodos(data.polledTodos);
        });
    }, 10000);
  }, [todos]);

  return todos;
}
