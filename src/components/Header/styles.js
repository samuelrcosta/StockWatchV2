import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
  background: #ccc;
`;

export const LogoArea = styled.div`
  img {
    height: 45px;
    width: auto;
  }
`;

export const MenuArea = styled.div`
  a {
    color: ${(props) => props.theme.colors.primary};

    &:hover {
      color: ${(props) => props.theme.colors.primaryHover};
    }

    svg {
      font-size: 28px;
    }
  }
`;
