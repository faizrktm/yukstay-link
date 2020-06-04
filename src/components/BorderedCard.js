import { Box } from "grommet";

const BorderedCard = ({ children, ...rest }) => (
  <Box
    round="8px"
    pad={{ vertical: '8px', horizontal: '14px' }}
    border={{ color: 'borderGrey', size: '1px', style: 'solid' }}
    {...rest}
  >
    {children}
  </Box>
);

export default BorderedCard;
