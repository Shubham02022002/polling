import React from 'react';

interface TodoProps {
  id: string;
  title: string;
}

const Todo = ({ title }: TodoProps) => {
  return <>{title}</>;
};

export default Todo;
