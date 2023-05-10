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
              placeholder={}
              type={'email'}
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
            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to={'/forgetpassword'}>Forget Password</Link>
            </Button>
  
            <Button colorScheme={'telegram'} type={'submit'}>
              {' '}
              Login
            </Button>
            <Text textAlign={'right'}> New User?{" "}
            <Button variant={'link'} colorScheme={'telegram'}>
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
            </Text>
          </VStack>
        </form>
      </Container>
    );
  };
  
  export default Signup;
  