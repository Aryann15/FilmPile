import React from 'react'
import {Flex,Text, Image, Input, Box, VStack, HStack,Stack, Heading, Button} from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'
import img2 from '../assets/2.png';

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.600"} minH={'10'} p='11' color={'white'}>
        <Stack direction ={['column', 'row']}>
            <VStack w={'full'}
>
                <Heading  >SUBSCRIBE FOR UPDATES</Heading>
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
<Box>
      <Flex  justifyContent="space-evenly">
        <Heading textAlign="center">FILMPILE   </Heading>
        <Image src={img2} w={'20'} ml={'7'} rounded="full" />
        
      </Flex>
      
    </Box>
    <Text py={'7'}>
All rights received
        </Text>
</VStack>
<VStack
w={'full'}>
    <Heading size={'md'}>
        SOCIAL MEDIA
    </Heading>
    <Button variant={'link'} colorScheme="telegram"
    variant="ghost">
        <a target={'blank'} href="https://github.com/Aryann15">Github</a>
    </Button>
    <Button variant={'link'} colorScheme="telegram"
    variant="ghost">
        <a target={'blank'} href="https://www.instagram.com/wannabe_schrute/">Instagram</a>
    </Button>
    <Button variant={'link'} colorScheme="telegram"
    variant="ghost">
        <a target={'blank'} href="https://twitter.com/RajArya17884633">Twitter</a>
    </Button>
</VStack>


        </Stack>

    </Box>

  )
}

export default Footer