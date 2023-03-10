// Todo App

'use client';

import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import TodoList from './components/TodoList';

// App Home Page
export default function Home() {
  return (
    <Box bg='#1D2521' minH='100vh' minW='100vw'>
      <Header />
      <TodoList />
    </Box>
  );
}
