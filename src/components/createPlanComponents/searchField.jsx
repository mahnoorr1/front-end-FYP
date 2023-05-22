import { Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchField() {
    return (
        <Paper
            component="form"
            sx={{ 
                p: '2px 4px', 
                display: 'flex', 
                alignItems: 'center', 
                width: 380, height: 35, 
                backgroundColor: '#1D313D',
            }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Area"
                inputProps={{ 'aria-label': 'search area', style: { color: '#636D74' }}}
            />
            <IconButton type="button" sx={{ p: '10px', color: '#636D74' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}