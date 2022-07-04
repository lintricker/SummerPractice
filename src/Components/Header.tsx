import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography
} from '@mui/material';
import React from 'react';
import useStyle from './Styles/HeaderStyle';

function MainHeader(){
    const headerStyle = useStyle();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography className={headerStyle.typography}
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                    >
                        LOGO
                    </Typography>
                    <Box className={headerStyle.box}>
                            <Button className={headerStyle.button} onClick={handleCloseNavMenu}>Лиги</Button>
                    </Box>
                    <Box className={headerStyle.box}>
                        <Button className={headerStyle.button} onClick={handleCloseNavMenu}>Команды</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default MainHeader;