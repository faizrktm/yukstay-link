import { useContext } from "react";
import { Box, Button, Text } from "grommet";

import { TranslateContext } from "helper/translate";

const Contact = () => {
  const { t } = useContext(TranslateContext);
  return(
    <Box align="center" margin={{ top: '8px' }}>
      <Box margin={{ bottom: '8px' }}><Text size="xsmall">{t('problem')}</Text></Box>
      <Box alignSelf="stretch">
        <Button color="brand" secondary label={<Text color="brand">{t('contact')}</Text>} />
      </Box>
    </Box>
  )
};

export default Contact;
