import React from 'react';
import Link from 'next/link';
import { AiOutlineStar } from 'react-icons/ai';

import { Container, LogoArea, MenuArea } from './styles';

function Header() {
  return (
    <Container>
      <LogoArea>
        <Link href="/">
          <a>
            <img src="/logo.png" alt="Stock Watch" />
          </a>
        </Link>
      </LogoArea>

      <MenuArea>
        <Link href="/favorites">
          <a>
            <AiOutlineStar />
          </a>
        </Link>
      </MenuArea>
    </Container>
  );
}

export default Header;
