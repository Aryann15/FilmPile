import {
    Container,
    VStack,
    Heading,
    Input,
    Button,
    Text,
    Avatar
  } from '@chakra-ui/react';
  import React from 'react';
  import { Link } from 'react-router-dom';
  const Signup = () => {
    return (
      <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
          <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full','96']}
            m={'auto'}
            my={'16'}
          >
            <Heading>FILMPILE</Heading>
            <Avatar alignSelf={'center'} boxSize={"32"} />
            <Input
              placeholder={"Name"}
              type={'text'}
              required
              focusBorderColor={'blue.500'}
            />
            <Input
              placeholder={'email'}
              type={'email'}
              required
              focusBorderColor={'blue.500'}    
            />
            <Input
              placeholder={'password'}
              type={'password'}
              required
              focusBorderColor={'blue.500'}
            />
            <Button colorScheme={'telegram'} type={'submit'}>
              {' '}
              Sign up
            </Button>
            <Text textAlign={'right'}> Already a user?{" "}
            <Button variant={'link'} colorScheme={'telegram'}>
              <Link to={'/login'}>Login</Link>
            </Button>
            </Text>
          </VStack>
        </form>
      </Container>
    );
  };
  
  export default Signup;
  