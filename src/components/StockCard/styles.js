import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding-top: 15px;

  .header {
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    justify-content: space-between;

    .name {
      font-size: 17px;
      font-weight: 600;
      margin-bottom: 5px;
    }

    .symbol {
      color: #6b6b6b;
    }

    button {
      background: transparent;
      border: 0;
      align-self: flex-start;
      color: #6b6b6b;
      font-size: 19px;
      transition: all 250ms;

      &:hover {
        color: #e6ce35;
      }
    }
  }

  .body {
    color: #333;
    padding: 10px 15px 15px;

    p {
      margin-bottom: 4px;
    }
  }

  .footer {
    background: #eee;
    padding: 10px 15px;
    border-top: 1px solid #ccc;

    a {
      padding: 7px 10px;
      background-color: ${(props) => props.theme.colors.primary};
      color: #fff;
      display: inline-block;
      width: auto;
      border-radius: 4px;

      &:hover {
        background-color: ${(props) => props.theme.colors.primaryHover};
      }
    }
  }
`;
