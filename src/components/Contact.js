import { useContext } from "react";
import { Box, Button, Text, Image } from "grommet";

import { TranslateContext } from "helper/translate";
import constants from "config/constants";
import createWhatsappLink from "helper/whatsapp";

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
    <Box align="center" margin={{ top: '16px' }}>
      <Box margin={{ bottom: '8px' }}><Text size="xsmall">{t('problem')}</Text></Box>
      <Box alignSelf="stretch">
        <Button
          color="brand"
          secondary
          gap="xsmall"
          label={<Text color="brand">{t('contact')}</Text>}
          icon={<WhatsappIcon />}
          href={createWhatsappLink(constants.CONTACT_PERSON)}
        />
      </Box>
    </Box>
  )
};

export default Contact;
