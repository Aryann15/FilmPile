import React from 'react'
import { Box, VStack, HStack,Stack, Heading, Button} from '@chakra-ui/react'


const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.600"} minH={'40'} p='11' color={'white'}>
        <Stack direction ={['column', 'row']}>
            <VStack >
                <Heading size='md' >HELLo wORLD</Heading>
                <HStack>
                    <Button>
                    </Button>
                </HStack>
            </VStack>
        </Stack>

    </Box>

  )
}

export default Footer