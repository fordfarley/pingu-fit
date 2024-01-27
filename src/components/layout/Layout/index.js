import React from 'react'
import Header from '../Header/index';
import Footer from '../Footer';
import { useState } from 'react';
import styled from 'styled-components';
import theme from '@/styles/theme';

const Content = styled.div`
    display:flex;
    flex-direction:column;
    flex-grow:1;
    justify-content:center;
    align-items:center;
    width:100%;
    height:80px;
    padding:${({noPadding})=> noPadding ? '0' : `0 ${theme.layoutPadding.mobile}`};
    background: ${({ theme: { colors } }) => colors.bgMain};
`;

const PageContainer = styled.div`
  display:flex;
  flex-direction:column;
  min-height:100vh;
`;

const Layout = (props) => {
  const [isOpen, setIsOpen] = useState(false);  
  const handleClick = () => setIsOpen(!isOpen);
  
  return (
    <PageContainer>
        <Header handleClick={handleClick} />
        <Content noPadding={props.noPadding}>
            {props.children}
        </Content>
        <Footer />
    </PageContainer>

  )
}

export default Layout