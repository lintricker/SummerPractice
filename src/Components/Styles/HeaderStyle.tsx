import {createTheme, makeStyles} from "@mui/material";

export default makeStyles({
    grid: {
        alignItems: 'stretch',
        spacing: 3,
        xs: 8,
        sm: 6,
        md: 6,
    },
    textField: {
        label: 'Standard',
        variant: 'standard',
    },
    typography:{
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
    },
    box:{
        flexGrow: 1,
        display: { xs: 'none', md: 'flex'},
    },
    button:{
        my: 2, color: 'white', display: 'block',
    }
});
