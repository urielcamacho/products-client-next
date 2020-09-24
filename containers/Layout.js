import React from 'react';
import { 
        AppBar,
        Box,
        Button,
        Container,
        Hidden,
        Paper,
        Toolbar,
        Typography
    } from '@material-ui/core';

const Layout = props => {

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Hidden xsDown>
                        <Typography variant="h6" style={{ 'flexGrow': '1' }}>
                            Prueba Técnica Roomie IT
                        </Typography>
                    </Hidden>
                    <Box justifyContent="center" display="flex">
                        <Button
                            variant="contained"
                            href="/store"
                            >
                            Store
                        </Button>
                        <Button
                            variant="contained"
                            href="/uriel-camacho"
                            style={{ 'marginLeft': 16 }}
                            >
                            Uriel Camacho
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            <Container fixed>
                { props.children }
            </Container>
        </>
    )
}

export default Layout;