import React from 'react'
import { Input, Box, VStack, HStack,Stack, Heading, Button} from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.600"} minH={'40'} p='11' color={'white'}>
        <Stack direction ={['column', 'row']}>
            <VStack alignItems={'stretch'}>
                <Heading size='md' >SUBSCRIBE FOR UPDATES</Heading>
                <HStack borderBottom={'2px solid white'} py='2'>
                    <Input placeholder="Enter email Here...."
                    border={'none'}
                    borderRadius="none"
                    outline={'none'}
                    focusBorderColor='none'
                    />
                    
                    <Button
                    p={'0'}
                    colorScheme="telegram" 
                    variant={'ghost'}                  >
                    
                    <AiOutlineSend size={20} />
                    
                    </Button>
                </HStack>
            </VStack>

<VStack w={"full"}
borderLeft={['none',"1px solid white"]}
borderRight={['none',"1px solid white"]}>

</VStack>

        </Stack>

    </Box>

  )
}

export default Footer