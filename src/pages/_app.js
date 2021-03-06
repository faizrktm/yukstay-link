import { Grommet } from 'grommet';

import theme from 'config/theme';
import 'styles/normalize.css';

function MyApp({ Component, pageProps }) {
  return (
    <Grommet theme={theme} background="grey">
      <Component {...pageProps} />
    </Grommet>
  )
}

export default MyApp;
