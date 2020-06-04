import { useContext } from 'react';
import {
  Anchor,
  Box,
  Button,
  Text,
  TextInput,
} from 'grommet';
import { View } from 'grommet-icons';
import styled from 'styled-components';

import { TranslateContext } from 'helper/translate';
import Card from 'components/Card';
import CardImage from 'components/CardImage';
import StarRating from './StarRating';

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

const PreRateUnitCard = () => {
  const { t } = useContext(TranslateContext);
  return(
    <CardImage image="https://yukstay-uploads.s3.ap-southeast-1.amazonaws.com/spaces%2Ff95f8d76-f974-424b-8d6f-b857be34df79%2Ffd89a7da-adbb-4c7d-bdb1-d47ad1751fa6%2Flarge.jpg">
      <Box
        round="8px"
        pad={{ vertical: '8px', horizontal: '14px' }}
        border={{ color: 'borderGrey', size: '1px', style: 'solid' }}
      >
        <Text size="small" weight="bold">Sudirman Residence</Text>
        <Text size="xsmall">Tower Mawar Floor 32 Unit 8</Text>
      </Box>
      <Box margin={{top: '16px'}}>
        <Text weight="bold">{t('how_unit')}</Text>
        <Box pad={{ top: '8px' }}>
          <StarRating max={5} />
        </Box>
        <Box pad={{ vertical: '16px' }}>
          <TextInput
            placeholder={t('share_thought')}
            size="medium"
          />
        </Box>
        <Button primary label="Submit" />
      </Box>
    </CardImage>
  );
};

const PreRateAgentCard = () => {
  const { t } = useContext(TranslateContext);
  return(
    <CardImage image="https://yukstay-uploads.s3.ap-southeast-1.amazonaws.com/spaces%2Ff95f8d76-f974-424b-8d6f-b857be34df79%2Ffd89a7da-adbb-4c7d-bdb1-d47ad1751fa6%2Flarge.jpg">
      <Box
        round="8px"
        pad={{ vertical: '8px', horizontal: '14px' }}
        border={{ color: 'borderGrey', size: '1px', style: 'solid' }}
      >
        <Text size="small" weight="bold">Indra Lesmana</Text>
        <Text size="xsmall">Yukstay Agent</Text>
      </Box>
      <Box margin={{top: '16px'}}>
        <Text weight="bold">{t('how_agent')}</Text>
        <Box pad={{ top: '8px' }}>
          <StarRating max={5} />
        </Box>
        <Box pad={{ vertical: '16px' }}>
          <TextInput
            placeholder={t('share_thought')}
            size="medium"
          />
        </Box>
        <Button primary label="Submit" />
      </Box>
    </CardImage>
  );
};

const Viewing = () => {
  const { t } = useContext(TranslateContext);
  return(
    <Card>
      <Box direction="row" align="center" pad={{ horizontal: '16px', top: '16px', bottom: '14px' }}>
        <Box background="softBlue" width="40px" height="40px" round="8px" align="center" justify="center">
          <View color="white" size="23px" />
        </Box>
        <Box margin={{ left: '8px' }}>
          <Text size="small" weight="bold">{t('viewing_completed')}</Text>
          <Text size="xsmall" color="placeholder">1 Jan 2020, 15:30</Text>
        </Box>
      </Box>
      <Wrapper>
        <PreRateAgentCard />
        <PreRateUnitCard />
        <PostRateAgentCard />
        <PostRateUnitCard />
      </Wrapper>
    </Card>
  )
};

export default Viewing;

const Wrapper = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-template-columns: 0px;
  grid-auto-flow: column;
  grid-auto-columns: 275px;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x proximity;
  padding-bottom: 16px;
  :before,
  :after {
    content: '';
    width: 16px;
  }
`;
