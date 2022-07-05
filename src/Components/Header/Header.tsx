import {AppBar, Box, Container, Toolbar,} from '@mui/material';
import React from 'react';
import {Button, Typography} from './HeaderStyle';

function MainHeader(){
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography variant="h6" noWrap>
                        LOGO
                    </Typography>
                    <div>
                            <Button>Лиги</Button>
                    </div>
                    <div>
                        <Button>Команды</Button>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default MainHeader;