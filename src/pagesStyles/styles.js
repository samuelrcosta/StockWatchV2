import styled from 'styled-components';
import { AppContainer } from '../styles/components';

export const Container = styled(AppContainer)`
  margin-top: 25px;
  color: ${(props) => props.theme.colors.primary};

  h1 {
    text-align: center;
    font-size: 40px;
    max-width: 650px;
    margin: 0 auto;
  }

  section {
    margin-top: 15px;

    h3 {
      text-align: center;
      font-size: 17px;
    }
  }
`;

export const SearchForm = styled.form`
  display: flex;
  margin: 20px 15px 0;

  input,
  button {
    border-radius: 4px;
    height: 50px;
  }

  input {
    width: 100%;
    border: 1px solid #ccc;
    border-right: 0;
    font-size: 17px;
    padding: 5px 15px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  button {
    background-color: ${(props) => props.theme.colors.primary};
    color: #fff;
    appearance: none;
    border: 0;
    min-width: 50px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    transition: all 0.3s;

    &:hover {
      background-color: ${(props) => props.theme.colors.primaryHover};
    }
  }
`;

export const ResultArea = styled.div`
  margin: 20px 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;
