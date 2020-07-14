import styled from 'styled-components';
import { AppContainer } from '../../styles/components';

export const Container = styled(AppContainer)`
  margin-top: 25px;
  color: ${(props) => props.theme.colors.primary};

  h1 {
    text-align: center;
    font-size: 25px;
    margin: 0 auto;
  }
`;
