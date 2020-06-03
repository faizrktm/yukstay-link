import React from 'react';
import { Box, Text } from 'grommet';
import styled from 'styled-components';

import Card from 'components/Card';


const PrerateCard = () => (
  <CardContainer>
    <CardFigureCanvas>
      <CardImageCanvas src="https://yukstay-uploads.s3.ap-southeast-1.amazonaws.com/spaces%2Ff95f8d76-f974-424b-8d6f-b857be34df79%2Ffd89a7da-adbb-4c7d-bdb1-d47ad1751fa6%2Flarge.jpg"/>
    </CardFigureCanvas>
    <CardContent>
      <Text weight="bold">Thank you for your feedback</Text>
      <Text>It will be really helpful for us to provide you with a better service</Text>
    </CardContent>
  </CardContainer>
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
      <PrerateCard />
      <PrerateCard />
      <PrerateCard />
      <PrerateCard />
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

const CardContainer = styled(Card)`
  scroll-snap-align: center;
`;

const CardFigureCanvas = styled.figure`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
`;

const CardImageCanvas = styled.img`
  width: 100%;
  height: 154px;
  object-fit: cover;
  border-radius: 8px 8px 0px 0px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px 8px 0px 0px;
  padding: 16px;
`;
