
import {
  Grid,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../../styles/theme";
import { FooterTitle } from "../../styles/footer";


export default function Footer() {
  return (
    <Box 
    id="about"
      sx={{
        background: Colors.shaft,
        color: Colors.white,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: '12px', md: '14px' }
      }}
    >
      <Grid container spacing={2} justifyContent="center" id="About">
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <Typography variant="caption2">    
            This course introduces pharmacy practice and the technician's role in a variety of pharmacy settings. Topics include medical terminology, drug delivery systems, law and ethics, prescription and medication orders, and the health care system.
          </Typography>
          <Box
            sx={{
              mt: 4,
              color: Colors.dove_gray,
            }}
          >
            
          </Box>
        </Grid>

        <Grid item md={6} lg={2} id="move">
          <FooterTitle variant="body1">information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                About Us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Order Tracking
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          {/* <FooterTitle variant="body1">my account</FooterTitle> */}
          <List>
            <ListItemText>
              {/* <Typography lineHeight={2} variant="caption2">
                Login
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Cart
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Account
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Wishlist
              </Typography> */}
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
      
        </Grid>
      </Grid>
    </Box>
  );
}