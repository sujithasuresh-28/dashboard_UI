import { createTheme } from '@mui/material/styles';

// Included ThemeProvider to add dark theme to the page
export const theme = createTheme({
    palette: {
        mode: 'dark',
        appBar: '#101010',
        sideBar: '#000000',
        desktopSideBar: '#242323'
    },
});