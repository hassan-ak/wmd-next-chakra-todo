// Todo App
// Addition Form
// Todos List

import React, { useState } from 'react';
import { Todo } from '../interface/interface';

export default function TodoList() {
  /************************************************/
  // Manage States
  const [title, setTitle] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [upTitle, setUpTitle] = useState<string>('');
  return <div>TodoList</div>;

  /************************************************/
}
