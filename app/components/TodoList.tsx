// Todo App
// Addition Form
// Todos List

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../interface/interface';

export default function TodoList() {
  /************************************************/
  // Manage States
  const [title, setTitle] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [upTitle, setUpTitle] = useState<string>('');

  /************************************************/
  // handle change in input cell
  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setTitle(e.target.value);
  const handleUpdateChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setUpTitle(e.target.value);

  /************************************************/
  // Function to add todo in the list
  // gets title as an argument
  // add todo to already listed todos
  // set title to empty string
  const addTodo = (title: string) => {
    if (title != '') {
      let newTodo: Todo = {
        id: uuidv4(),
        title,
        isDone: false,
      };
      const newTodos: Todo[] = [...todos, newTodo];
      setTodos(newTodos);
      setTitle('');
    }
  };

  /************************************************/
  // Function to update todo in the list
  // gets todo as an argument
  // find todo in the list based on id
  // update content of the todo
  const updateTodo = (props: Todo) => {
    if (props.title != '') {
      let newTodos: Todo[] = [];
      todos.map((todo) => {
        let newTodo: Todo = { ...todo };
        if (todo.id == props.id) {
          newTodo = {
            id: props.id,
            title: props.title,
            isDone: props.isDone,
          };
        }
        newTodos.push(newTodo);
      });
      setTodos(newTodos);
      setUpTitle('');
    }
  };

  /************************************************/
  // Function to delete todo from the list
  // gets todo id as an argument
  // find todo in the list based on id
  // delete todo from the list
  const deleteTodo = (props: string) => {
    let newTodos: Todo[] = todos.filter((todo) => {
      return todo.id !== props;
    });
    setTodos(newTodos);
  };

  /************************************************/
  return <div>TodoList</div>;
}
