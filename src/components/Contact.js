import { useContext } from "react";
import { Box, Button, Text, Image } from "grommet";

import { TranslateContext } from "helper/translate";

const WhatsappIcon = () => (
  <Box
    width="18px"
    height="18px"
  >
    <Image
      fit="contain"
      src="/images/whatsapp_blue.svg"
      alt="Contact Agent"
      fill
    />
  </Box>
);

const Contact = () => {
  const { t } = useContext(TranslateContext);
  return(
    <Box align="center" margin={{ top: '8px' }}>
      <Box margin={{ bottom: '8px' }}><Text size="xsmall">{t('problem')}</Text></Box>
      <Box alignSelf="stretch">
        <Button
          color="brand"
          secondary
          gap="xsmall"
          label={<Text color="brand">{t('contact')}</Text>}
          icon={<WhatsappIcon />}
        />
      </Box>
    </Box>
  )
};

export default Contact;
