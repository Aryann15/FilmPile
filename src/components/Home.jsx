import React from 'react';
import { Box, Container, Heading, Stack } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.png';
import { Image } from '@chakra-ui/react';
const Home = () => {
  return (
    <Box>
      <MyCarousel />

     
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h="full" position="relative">
      <Image src={img1} zIndex={-1} fit="contain" />
    </Box>
  </Carousel>
);

export default Home;
