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
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        pos={'fixed'}
        top={'10'}
    
        left={'10'}
        colorScheme="yellow"
        p={'0'}
        h={'12'}
        w={'15'}
        onClick={onOpen}
        position="absolute"
        transform="translate(-50%, -50%)"
        zIndex={1}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>MY VIDEOS</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme="telegram"
              >
                <Link to={'/'}>Home</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme="telegram"
              >
                <Link to={'/videos'}>Videos</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme="telegram"
              >
                <Link to={'/video?category-free'}>Free Videos</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme="telegram"
              >
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>

            <HStack
              pos={'absolute'}
              bottom={'10'}
              left={'10'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme={'telegram'}>
                <Link to={'/login'}>Log in</Link>
              </Button>

              <Button
                onClick={onClose}
                colorScheme={'telegram'}
                variant={'outline'}
              >
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
          <div>hello</div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
