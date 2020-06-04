import styled from 'styled-components';

const Card = ({ children, className }) => (
  <Container className={className}>
    {children}
  </Container>
);

export default Card;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 3px 4px 0px rgba(0,0,0, 0.1);
`;
