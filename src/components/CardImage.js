import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const CardImage = ({ children, image }) => (
  <CardContainer>
    <CardFigureCanvas>
      <CardImageCanvas src={image}/>
    </CardFigureCanvas>
    <CardContent>
      {children}
    </CardContent>
  </CardContainer>
);

export default CardImage;

const CardContainer = styled(Card)`
  scroll-snap-align: center;
`;

const CardFigureCanvas = styled.figure`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
`;

const CardImageCanvas = styled.img`
  width: 100%;
  height: 154px;
  object-fit: cover;
  border-radius: 8px 8px 0px 0px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: white;
  padding: 16px;
  z-index: 2;
  margin-top: -8px;
`;
