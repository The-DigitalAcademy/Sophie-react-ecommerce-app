import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";


export const BannerContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '0px 0px',
    background: Colors.light_gray,
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItem: 'center'
    }
}));

export const BannerImage = styled('img')(({ src, theme }) => ({
    src: `url(${src})`,
    width: '500px',
    [theme.breakpoints.down('md')]: {
        width: '350px',
    },

    [theme.breakpoints.down('sm')]: {
        width: '320px',
        height: '300px'
    }
}));

export const BannerContent = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItem: 'center',
    maxWidth: 420,
    padding: '30px'
}));

export const BannerTitle = styled(Box)(({theme}) => ({
    lineHeight: 1.5,
    fontSize: '72px',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '42px'
    }
}));

export const BannerDescription = styled(Box)(({theme}) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
        lineHeight: 1.25,
        letterSpacing: 1.15,
        marginBottom: "1.5em",
    },
}));