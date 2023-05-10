import { Stack, VStack, Heading, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

import vid1 from '../assets/3.mp4';
import vid2 from '../assets/4.mp4';
import vid3 from '../assets/5.mp4';
import vid4 from '../assets/6.mp4';

import vid6 from '../assets/8.mp4';
import vid7 from '../assets/9.mp4';
import vid8 from '../assets/10.mp4';

const Videos = () => {
  const videosArr = [vid1, vid2, vid3, vid4, vid6, vid7, vid8,];
  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
      <div style={{ width: '1200px', height: '680px' }}>
  <video
    controls
    controlsList="nodownload"
    src={videoSrc}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }}
  ></video>
</div>

        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading> SAMPLE VIDEO 1</Heading>
          <Text>hello hi</Text>
        </VStack>
      </VStack>

      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p={'8'}
        spacing={'8'}
        overflow={'auto'}
      >
        {videosArr.map((item, index) => (
          <Button
            variant={'ghost'}
            colorScheme={'telegram'}
            onClick={() => setVideoSrc(item)}
          >
            Video {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
