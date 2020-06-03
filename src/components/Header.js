import React from 'react';
import styled from 'styled-components';

import { selectColor } from 'helper/theme';
import { Box, Image, Text } from 'grommet';

const Header = () => (
  <Container>
    <Wrapper>
      <Box
        width="59px"
        height="20px"
      >
        <Image
          fit="contain"
          src="/images/yukstay_logo.png"
          alt="Yukstay Link"
          fill
        />
      </Box>
      <Text color="white" weight="bold" size="large">Hi, Ludy Chatry</Text>
    </Wrapper>
  </Container>
);

export default Header;

const Container = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
  background-color: ${selectColor('brand')};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 74px;
  max-width: 480px;
  width: 100%;
  margin: 0px auto;
  padding: 0px 16px;
`;
