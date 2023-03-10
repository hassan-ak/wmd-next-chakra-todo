// Todo App
// Addition Form
// Todos List

import { v4 as uuidv4 } from 'uuid';
import EmptyList from './EmptyList';
import React, { useState } from 'react';
import { Todo } from '../interface/interface';
import { Input, FormControl } from '@chakra-ui/react';
import { Box, Button, Popover, Portal, Stack } from '@chakra-ui/react';
import { PopoverContent, PopoverBody, PopoverArrow } from '@chakra-ui/react';
import { HStack, Text, Checkbox, PopoverCloseButton } from '@chakra-ui/react';
import { PopoverTrigger, PopoverHeader, PopoverFooter } from '@chakra-ui/react';

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
  // Display components
  {
    // App when no todos in the list
    if (todos.length === 0) {
      return (
        <Box>
          {/************************************************/}
          {/* Add new todo form */}
          <Box color='white' m='auto' maxW='900px' p={'5'}>
            <FormControl>
              <Stack spacing={3} direction={['column', 'column', 'row']}>
                <Input
                  placeholder='Enter New Todo'
                  size={['md', 'lg']}
                  type='text'
                  value={title}
                  onChange={handleInputChange}
                />
                <Button
                  colorScheme='teal'
                  variant='solid'
                  size={['md', 'lg']}
                  onClick={() => {
                    addTodo(title);
                  }}
                >
                  Add Todo
                </Button>
              </Stack>
            </FormControl>
          </Box>
          {/************************************************/}
          {/* Empty List */}
          <EmptyList />;
        </Box>
      );
    } else {
      {
        /************************************************/
      }
      // When Todos in the List
      return (
        <Box>
          {/************************************************/}
          {/* Add new todo form */}
          <Box color='white' m='auto' maxW='900px' p={'5'}>
            <FormControl>
              <Stack spacing={3} direction={['column', 'column', 'row']}>
                <Input
                  placeholder='Enter New Todo'
                  size={['md', 'lg']}
                  type='text'
                  value={title}
                  onChange={handleInputChange}
                />
                <Button
                  colorScheme='teal'
                  variant='solid'
                  size={['md', 'lg']}
                  onClick={() => {
                    addTodo(title);
                  }}
                >
                  Add Todo
                </Button>
              </Stack>
            </FormControl>
          </Box>
          {/************************************************/}
          {/* Todos List Box */}
          <Box px='20px'>
            <Box
              as='div'
              color='white'
              bg='#27302C'
              maxW='750px'
              p={'5'}
              m='auto'
              borderRadius='10'
              minH={'200px'}
            >
              <Stack spacing='2'>
                {todos.map((todo: Todo) => {
                  return (
                    /************************************************/
                    // Todos List mapp over total todos
                    <HStack
                      bg='#48BB78'
                      key={todo.id}
                      px='3'
                      py='1'
                      border={'1px'}
                      borderRadius='md'
                      justify='space-between'
                    >
                      {/************************************************/}
                      {/* Todo and check box */}
                      <HStack spacing={['2', '5']}>
                        <Checkbox
                          isChecked={todo.isDone}
                          colorScheme='yellow'
                          onChange={() => {
                            updateTodo({
                              id: todo.id,
                              title: todo.title,
                              isDone: !todo.isDone,
                            });
                          }}
                        />
                        <Text fontSize={['xs', 'md']}>{todo.title}</Text>
                      </HStack>
                      {/************************************************/}
                      {/* Update or delete button based on status */}
                      {todo.isDone ? (
                        /************************************************/
                        // Delete button
                        <Button
                          fontSize='md'
                          colorScheme='red'
                          size={['xs', 'md']}
                          w={['16', '24']}
                          flexShrink={0}
                          onClick={() => {
                            deleteTodo(todo.id);
                          }}
                        >
                          Delete
                        </Button>
                      ) : (
                        /************************************************/
                        // Update button
                        // Chkara UI PopOver component
                        <Popover>
                          <PopoverTrigger>
                            <Button
                              fontSize='md'
                              colorScheme='purple'
                              size={['xs', 'md']}
                              w={['16', '24']}
                              flexShrink={0}
                            >
                              Update
                            </Button>
                          </PopoverTrigger>
                          {/************************************************/}
                          {/* Popover component content */}
                          <Portal>
                            <PopoverContent
                              maxW={['150px', '300px']}
                              color='white'
                              bg='#1D2521'
                            >
                              <PopoverArrow />
                              <PopoverHeader textAlign={'center'}>
                                Update Todo
                              </PopoverHeader>
                              <PopoverCloseButton />
                              <PopoverBody>
                                <Input
                                  placeholder={todo.title}
                                  size={['md', 'lg']}
                                  type='text'
                                  value={upTitle}
                                  onChange={handleUpdateChange}
                                />
                              </PopoverBody>
                              <PopoverFooter textAlign='center'>
                                <Button
                                  colorScheme='teal'
                                  variant='solid'
                                  size={['sm']}
                                  onClick={() => {
                                    updateTodo({
                                      id: todo.id,
                                      title: upTitle,
                                      isDone: todo.isDone,
                                    });
                                  }}
                                >
                                  Update
                                </Button>
                              </PopoverFooter>
                            </PopoverContent>
                          </Portal>
                        </Popover>
                      )}
                    </HStack>
                  );
                })}
              </Stack>
            </Box>
          </Box>
        </Box>
      );
    }
  }
}
