// App title

import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

export default function Header() {
  return (
    <Box color='#F1F3F2' textAlign='center' py='5'>
      <Heading fontSize={['3xl', '4xl']}>Todo&apos;s List</Heading>
    </Box>
  );
}
