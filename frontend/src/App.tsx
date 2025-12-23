import { useEffect, useState } from "react";
import Todo from "./components/Todo";

const App = () => {
  interface Todo {
    id: string;
    title: string;
  }
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

  return (
    <>
      {todos.map((todo) => (
        <Todo id={todo.id} title={todo.title} />
      ))}
    </>
  );
};

export default App;
