import { IconButton, Slide } from '@mui/material';
import { SearchBoxContainer , SearchField } from '../../styles/search';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox() {
    
    // const { showSearchbox, setShowSearchBoxn }  = useUIContext();

    return(
        <Slide direction='dom' in={true} timeout={500}>
            <SearchBoxContainer>
                <SearchField
                    color='secondary'
                    variant='standard'
                    fullWidth
                    placeholder='search...' />
                    <IconButton>
                        <SearchIcon
                            sx={{
                                fontsize: { xs: '2rem', ml: '3rem'}
                            }}
                            color='secondary' />
                    </IconButton>
            </SearchBoxContainer>
        </Slide>
    )
}