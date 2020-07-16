import styled from 'styled-components';
import { AppContainer, AnimatedSpinner, StocksGrid } from '../../styles/components';

export const Container = styled(AppContainer)`
  margin-top: 25px;
  color: ${(props) => props.theme.colors.primary};
  min-height: 200px;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 40px;
    max-width: 650px;
    margin: 0 auto;
  }
`;

export const LoadingBlock = styled(AnimatedSpinner)`
  font-size: 24px;
  align-self: center;
`;

export const ResultArea = styled(StocksGrid)``;