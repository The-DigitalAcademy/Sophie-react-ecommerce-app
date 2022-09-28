import "./App.css";
import { Container, Typography, Box, Stack } from "@mui/material";
import Appbar from "./components/appbar";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import Banner from "./components/banner";
import Products from "./components/products";
import { UIProvider } from "./context/ui";
import Footer from "./components/footer";
import AppDrawer from "./components/drawer";
import Promotions from "./components/promotions";
import SearchBox from "./components/search";
import Cart from './components/Cart'
// import About from "./pages/About"
import { useEffect, useState } from "react";

function App() {
  const [cartProducts, setCartProducts] = useState([]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addProductToCart = (product) => {
    setCartProducts([...cartProducts, product]);
  };

  const removeFromCart = () => {
    console.log("remove product")
  }

  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <Stack>
          <UIProvider>
            <Appbar cartProducts={cartProducts} handleClickOpen={handleClickOpen} />
            <Banner />
            <Promotions />
            <SearchBox />
            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Our Products</Typography>
            </Box>
            <Products addProductToCart={addProductToCart} />
            <Cart open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} cartProducts={cartProducts} />
            <Footer />
            <AppDrawer />
          </UIProvider>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
