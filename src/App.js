import { ThemeProvider } from '@mui/system';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/banner';
import Promotions from './components/promotions';

function App() {

  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: '#fff' }}>

        <Appbar />
        <Banner />
        <Promotions />
        {
          /*
          Banner
          Promotions
          title
          Products
          footer
          searchbox
          appdrawer
          */
     
        }
      </Container>
    </ThemeProvider>
  );
}

export default App;