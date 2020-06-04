import { useContext } from "react";
import { Box, Text } from "grommet";
import { Calendar, Location } from "grommet-icons";
import styled from "styled-components";

import Card from "components/Card";
import BorderedCard from "components/BorderedCard";
import { TranslateContext } from "helper/translate";

const ScheduledViewing = () => {
  const { t } = useContext(TranslateContext);
  return(
    <StyledCard>
      <Box direction="row" align="center" pad={{ bottom: '14px' }}>
        <Box background="softBlue" width="40px" height="40px" round="8px" align="center" justify="center">
          <Calendar color="white" size="23px" />
        </Box>
        <Box margin={{ left: '8px' }}>
          <Text size="small" weight="bold">{t('viewing_schedule')}</Text>
          <Text size="xsmall" color="placeholder">1 Jan 2020, 15:30</Text>
        </Box>
      </Box>
      <BorderedCard direction="row" align="center" justify="between">
        <Box>
          <Text size="small" weight="bold">Indra Lesmana</Text>
          <Text size="xsmall">Yukstay Agent</Text>
        </Box>
      </BorderedCard>
      <BorderedCard margin={{ top: '8px' }}>
        <Box direction="row" align="center">
          <Calendar size="17px" color="placeholder" />
          <Box pad={{ left: '8px' }}>
            <Text size="small" weight="bold" color="green">Tue, 12 Apr 2020 11:00</Text>
          </Box>
        </Box>
        <Box direction="row" align="center" margin={{ top: '4px' }}>
          <Location size="17px" color="placeholder" />
          <Box pad={{ left: '8px' }}>
            <Text size="small" weight="bold">Sudirman Residence T1 F22 #12</Text>
          </Box>
        </Box>
      </BorderedCard>
    </StyledCard>
  )
};

export default ScheduledViewing;

const StyledCard = styled(Card)`
  padding: 16px;
`;
