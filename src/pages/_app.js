import React from 'react';
import styled from 'styled-components';
import { Grommet } from 'grommet';

import theme from 'config/theme';
import Header from 'components/Header';
import 'styles/normalize.css';

function MyApp({ Component, pageProps }) {
  return (
    <Grommet theme={theme} background="grey" full>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
    </Grommet>
  )
}

export default MyApp;

const Main = styled.main`
  position: relative;
  top: 74px;
  max-width: 480px;
  min-height: calc(100vh - 74px);
  margin: 0px auto;
  padding: 14px 16px 32px;
  background-color: transparent;
  box-sizing: border-box;
  width: 100%;
`;
