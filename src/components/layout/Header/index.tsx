// import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import { Wrapper, Burger, Menu } from './styles';
import { Large } from '../FontScale';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
        <Link href="/"><Image src="/Logo.png" width={195} height={65} alt="logo"/></Link>
        <Burger
        isOpen={isOpen}
        burgerColor='white'
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div />
        <div />
        <div />
      </Burger>
      <Menu isOpen={isOpen} height={'80px'}>
        <Large center light>Menu</Large>  
      </Menu>
    </Wrapper>
  );
};


export default Header