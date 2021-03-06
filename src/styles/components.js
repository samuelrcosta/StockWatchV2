import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AppContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const AnimatedSpinner = styled(FaSpinner)`
  animation: ${rotate} 2s linear infinite;
`;

export const StocksGrid = styled.div`
  margin: 20px 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;
