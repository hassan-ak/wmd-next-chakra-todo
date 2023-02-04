// Empty List

import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export default function EmptyList() {
  return (
    <Box px='5'>
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
        <Box
          h={'160px'}
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Text>There is No todo saved.</Text>
          <Text>Add a new Todo</Text>
        </Box>
      </Box>
    </Box>
  );
}
