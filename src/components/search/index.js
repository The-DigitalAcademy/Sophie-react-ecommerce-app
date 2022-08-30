// import { IconButton, Slide } from '@mui/material';
// import { useContext } from 'react';
// import { SearchBoxContainer , SearchField } from '../../styles/search';
// import SearchIcon from '@mui/icons-material/Search';
// import CloseIcon from '@mui/icons-material/Close';

// export default function SearchBox() {
    
//     const { showSearchbox, setShowSearchBoxn }  = useUIContext();

//     return(
//         <Slide direction='dom' in={true} timeout={500}>
//             <SearchBoxContainer>
//                 <SearchField
//                     color='secondary'
//                     variant='standard'
//                     fullWidth
//                     placeholder='search...' />
//                     <IconButton>
//                         <SearchIcon
//                             sx={{
//                                 fontsize: { xs: '2rem', ml: '3rem'}
//                             }}
//                             color='secondary' />
//                     </IconButton>
//                     <IconButton 
//                     onClick={() => setShowSearchBox(false)}
//                     sx={{
//                         position: 'absolute',
//                         top: 10,
//                         right: 10
//                     }}
//                     >
//                     <CloseIcon sx={{fontsize: '4rem'}} colr="secondary" />
//                     </IconButton>
//             </SearchBoxContainer>
//         </Slide>
//     )
// }