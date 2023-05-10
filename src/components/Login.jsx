import { Container, VStack, Heading ,Input} from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
    
    <form>
        <VStack alignItems={"stretch"} spacing={'8'} w={'96'} m={'auto'} my={'16'}>
           <Heading>WELCOME BACK!</Heading> 

           <Input placeholder={'email'} type={'email'} required focusBorderColor={"blue.500"} />     
          </VStack>
     </form>
    </Container>
  )
}

export default Login