import React from 'react';
import { Anchor, Box, Text } from 'grommet';
import styled from 'styled-components';

import Card from 'components/Card';
import CardImage from 'components/CardImage';

const PostRateUnitCard = () => (
  <CardImage image="https://yukstay-uploads.s3.ap-southeast-1.amazonaws.com/spaces%2Ff95f8d76-f974-424b-8d6f-b857be34df79%2Ffd89a7da-adbb-4c7d-bdb1-d47ad1751fa6%2Flarge.jpg">
    <Text weight="bold">Thank you for your feedback</Text>
    <Box margin={{ top: '8px' }}><Text>It will be really helpful for us to provide you with a better service</Text></Box>
    <Box
      margin={{ top: '16px' }}
      pad={{ vertical: '12px', horizontal: '16px' }}
      round="8px"
      border={{ color: 'borderGrey', size: '1px', style: 'solid' }}
    >
      <Text weight="bold">We got more units!</Text>
      <Box margin={{ top: '10px' }}>
        <Text>Search a place near your office or city center, we only provide the best unit for you</Text>
      </Box>
      <Box alignSelf="end" margin={{ top: '12px' }}>
        <Anchor href="#" size="small" label="Leave a review" />
      </Box>
    </Box>
  </CardImage>
);

const PostRateAgentCard = () => (
  <CardImage image="https://yukstay-uploads.s3.ap-southeast-1.amazonaws.com/spaces%2Ff95f8d76-f974-424b-8d6f-b857be34df79%2Ffd89a7da-adbb-4c7d-bdb1-d47ad1751fa6%2Flarge.jpg">
    <Text weight="bold">Thank you for your feedback</Text>
    <Box margin={{ top: '8px' }}><Text>It will be really helpful for us to provide you with a better service</Text></Box>
    <Box
      margin={{ top: '16px' }}
      pad={{ vertical: '12px', horizontal: '16px' }}
      round="8px"
      border={{ color: 'borderGrey', size: '1px', style: 'solid' }}
    >
      <Text weight="bold">Enjoy using Yukstay?</Text>
      <Box margin={{ top: '10px' }}>
        <Text>We’d love your feedback! Consider leaving a review for our app on the store!</Text>
      </Box>
      <Box alignSelf="end" margin={{ top: '12px' }}>
        <Anchor href="#" size="small" label="Leave a review" />
      </Box>
    </Box>
  </CardImage>
);

const CompleteTask = () => (
  <Card>
    <Box direction="row" align="center" pad={{ horizontal: '16px', top: '16px', bottom: '14px' }}>
      <Box background="softBlue" width="40px" height="40px" round="8px" />
      <Box margin={{ left: '8px' }}>
        <Text size="small" weight="bold">You just completed a viewing</Text>
        <Text size="xsmall" color="textGrey">1 Jan 2020, 15:30</Text>
      </Box>
    </Box>
    <Wrapper>
      <PostRateAgentCard />
      <PostRateUnitCard />
    </Wrapper>
  </Card>
);

export default CompleteTask;

const Wrapper = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-template-columns: 0px;
  grid-auto-flow: column;
  grid-auto-columns: 275px;
  overflow-x: scroll;
  scroll-snap-type: x proximity;
  padding-bottom: 16px;
  :before,
  :after {
    content: '';
    width: 16px;
  }
`;
