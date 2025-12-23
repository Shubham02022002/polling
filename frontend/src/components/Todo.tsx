interface TodoProps {
  id: string;
  title: string;
}

const Todo = ({ title }: TodoProps) => {
  return <h3>{title}</h3>;
};

export default Todo;
