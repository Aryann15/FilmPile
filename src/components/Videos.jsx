import { Stack, VStack, Heading, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';


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
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
