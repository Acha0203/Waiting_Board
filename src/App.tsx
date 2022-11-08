import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './assets/theme/theme';
import MainPage from './components/pages/MainPage';

const SWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <SWrapper>
      <MainPage />
    </SWrapper>
  </ThemeProvider>
);

export default App;
