import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
        <BannerImage src="https://media.istockphoto.com/photos/this-is-everyones-favorite-pharmacy-picture-id1053043184?b=1&k=20&m=1053043184&s=170667a&w=0&h=o2m8c7EHCrOQzgd8jfNtYDbrKyzivSQSe6-DdDwot30="/>
      <BannerContent>
        <Typography variant="h6">Pharmacy Collection</Typography>
        <BannerTitle variant="h2">New Pharmacy</BannerTitle>

        <BannerDescription variant="subtitle">
          Purses for first impressions 
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
}
