import express, { Response, Request, Application } from "express";
import cors from "cors";

const app: Application = express();
const PORT: number = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

interface Todo {
  id: number;
  title: string;
}
const todos: Array<Todo> = [
  { id: 1, title: "Learn JavaScript" },
  { id: 2, title: "Build a REST API" },
  { id: 3, title: "Study React" },
  { id: 4, title: "Master Node.js" },
  { id: 5, title: "Write unit tests" },
  { id: 6, title: "Deploy to production" },
  { id: 7, title: "Review pull requests" },
  { id: 8, title: "Optimize performance" },
  { id: 9, title: "Document code" },
  { id: 10, title: "Fix bugs" },
  { id: 11, title: "Refactor legacy code" },
  { id: 12, title: "Learn Docker" },
  { id: 13, title: "Set up CI/CD" },
  { id: 14, title: "Design database schema" },
  { id: 15, title: "Implement authentication" },
  { id: 16, title: "Add error handling" },
  { id: 17, title: "Create API documentation" },
  { id: 18, title: "Set up logging" },
  { id: 19, title: "Implement caching" },
  { id: 20, title: "Monitor application" },
];
app.get("/todos", (req: Request, res: Response) => {
  let polledTodos = todos.slice(0, Math.floor(Math.random() * 20));
  res.json({ polledTodos });
});

app.get("/todos/:id", (req: Request, res: Response) => {
  let todoId: number = parseInt(req.params.id);
  const todo: Todo | undefined = todos.find((todo) => todo.id === todoId);
  if (!todo) {
    return res.status(404).json({ message: "Todo id not found" });
  }
  res.json({ todo });
});

app.listen(PORT, () => {
  console.log("server is up");
});
