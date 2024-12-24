//import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import MainPage from './Components/MainPage/MainPage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function Contador() {
  
  const GlobalStyles = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  `
  const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

  return (
    <>
    <GlobalStyles/>
    <Container>
      <Header/>
      <MainPage/>
      <Footer/>
    </Container>
    </>
  );
}

export default Contador;

 
