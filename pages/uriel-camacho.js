import React from 'react';
import Head from 'next/head';
import {
    Box,
    Container,
    Grid,
    Typography
} from '@material-ui/core';

//
import Layout from '../containers/Layout';


const Applicant = () => (
    <>
        <Head>
            <title>Página del aplicante Uriel Camacho</title>
        </Head>
        <Layout>
            <Container static>
                <Grid container spacing={3} style={{ 'marginTop': 40 }}>
                    <Grid item xs={12}>
                        <Box display="flex">
                            <Typography variant="h3" gutterBottom>
                                Uriel Camacho
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item sm={6}>
                        <Box display="flex" fontSize="normal">
                            <Typography variant="body1" gutterBottom>
                                correo: urielcamachoh95@gmail.com
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item sm={6}>
                        <Box display="flex" fontSize="normal">
                            <Typography variant="body1" gutterBottom>
                                teléfono: 2212287141
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item sm={12}>
                        <Box display="flex">
                            <Typography variant="h5" gutterBottom>
                                Universidad:
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                BUAP
                            </Typography>
                        </Box>
                        <Box display="flex">
                            <Typography variant="h5" gutterBottom>
                                Cursos:
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                React & Redux
                                React Native
                                NodeJS
                                Vue
                                Laravel
                                Express
                            </Typography>
                            Otorgados por platzi
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    </>
)

export default Applicant;