import { ThemeProvider } from 'styled-components'
import { Container } from './components/styles/Container.styled';

import Wrapper from './components/wrapper';
import GlobalStyles from './components/styles/Global';




const theme = {
  colors: {
    bg: '#CCD6A6',
    bg2: '#DAE2B6',
    bg3: '#DFE8CC',
    bg4: '#F7EDDB',
  }

}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
      <Container>
        <Wrapper />
      </Container>
      </>
    </ThemeProvider>
    
  );
}

export default App;
