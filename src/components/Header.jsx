import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  VStack,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {

const {isOpen,onOpen,onClose} = useDisclosure();

  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="telegram"
        p={'0'}
        h={'10'}
        w={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>MY VIDEOS</DrawerHeader>
            <DrawerBody>
                <VStack>
                    <Button colorScheme="telegram">
                        <Link to={"/"}>Home</Link>
                    </Button>
                </VStack>
            </DrawerBody>
            <div>hello</div>
        </DrawerContent>

      </Drawer>
    </>
  );
};

export default Header;
