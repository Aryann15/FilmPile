import { Stack, VStack, Heading, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';


const Videos = () => {
  const videosArr = [vid1, vid2, vid3, vid4, vid6, vid7, vid8,];
  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (

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

};

export default Videos;
