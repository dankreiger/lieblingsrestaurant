import styled from 'styled-components';
import { Container, Col } from 'reactstrap';

export const NewAddressModalWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const NewAddressModalContainer = styled(Container)`
  padding: 20px;
  background: #fff;
  border-radius: 2px;
  display: grid;
  min-height: 300px;
  margin: 1rem;
  position: relative;
  min-width: 300px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  justify-self: center;
`;

export const NewAddressModalButtonCol = styled(Col)`
  display: flex;
  button {
    align-self: flex-end;
    flex-grow: 1;
  }
`;

export const NewAddressModalTextCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
