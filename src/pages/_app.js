import App from 'next/app';
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

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const { query } = appContext;
  // decode query.id to get information about user using decode API.
  const appProps = await App.getInitialProps(appContext);
  appProps.pageProps = {
    language: 'en', // only example
  };

  return { ...appProps };
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
  width: 100%;
`;
