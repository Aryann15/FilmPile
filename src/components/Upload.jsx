import { Container, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <VStack color={'blue.600'} h={'full'} justifyContent={'center'}>
        <AiOutlineUpload size={'10vmax'} />
      </VStack>
    </Container>
  );
};

export default Upload;
