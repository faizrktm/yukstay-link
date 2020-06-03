import React, { useContext } from 'react';
import { Anchor, Box, Text } from 'grommet';
import styled from 'styled-components';

import { TranslateContext } from 'helper/translate';
import Card from 'components/Card';
import CardImage from 'components/CardImage';

const PostRateUnitCard = () => {
  const { t } = useContext(TranslateContext);
  return(
    <CardImage image="https://yukstay-uploads.s3.ap-southeast-1.amazonaws.com/spaces%2Ff95f8d76-f974-424b-8d6f-b857be34df79%2Ffd89a7da-adbb-4c7d-bdb1-d47ad1751fa6%2Flarge.jpg">
      <Text weight="bold">{t('feedback')}</Text>
      <Box margin={{ top: '8px' }}><Text>{t('service')}</Text></Box>
      <Box
        margin={{ top: '16px' }}
        pad={{ vertical: '12px', horizontal: '16px' }}
        round="8px"
        border={{ color: 'borderGrey', size: '1px', style: 'solid' }}
      >
        <Text weight="bold">{t('units')}</Text>
        <Box margin={{ top: '10px' }}>
          <Text>{t('search')}</Text>
        </Box>
        <Box alignSelf="end" margin={{ top: '12px' }}>
          <Anchor href="#" size="small" label={t('explore')} />
        </Box>
      </Box>
    </CardImage>
  );
};

const PostRateAgentCard = () => {
  const { t } = useContext(TranslateContext);
  return(
    <CardImage image="https://yukstay-uploads.s3.ap-southeast-1.amazonaws.com/spaces%2Ff95f8d76-f974-424b-8d6f-b857be34df79%2Ffd89a7da-adbb-4c7d-bdb1-d47ad1751fa6%2Flarge.jpg">
      <Text weight="bold">{t('feedback')}</Text>
      <Box margin={{ top: '8px' }}><Text>{t('service')}</Text></Box>
      <Box
        margin={{ top: '16px' }}
        pad={{ vertical: '12px', horizontal: '16px' }}
        round="8px"
        border={{ color: 'borderGrey', size: '1px', style: 'solid' }}
      >
        <Text weight="bold">{t('enjoy')}</Text>
        <Box margin={{ top: '10px' }}>
          <Text>{t('review')}</Text>
        </Box>
        <Box alignSelf="end" margin={{ top: '12px' }}>
          <Anchor href="#" size="small" label={t('leave_review')} />
        </Box>
      </Box>
    </CardImage>
  );
};

const CompleteTask = () => {
  const { t } = useContext(TranslateContext);
  return(
    <Card>
      <Box direction="row" align="center" pad={{ horizontal: '16px', top: '16px', bottom: '14px' }}>
        <Box background="softBlue" width="40px" height="40px" round="8px" />
        <Box margin={{ left: '8px' }}>
          <Text size="small" weight="bold">{t('viewing_completed')}</Text>
          <Text size="xsmall" color="textGrey">1 Jan 2020, 15:30</Text>
        </Box>
      </Box>
      <Wrapper>
        <PostRateAgentCard />
        <PostRateUnitCard />
      </Wrapper>
    </Card>
  )
};

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
