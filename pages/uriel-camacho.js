import React from 'react';
import Head from 'next/head';
import {
    Grid
} from '@material-ui/core';

//
import Layout from '../containers/Layout';


const Applicant = () => (
    <>
        <Head>
            <title>Página del aplicante Uriel Camacho</title>
        </Head>
        <Layout>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    Uriel camacho
                </Grid>
            </Grid>
        </Layout>
    </>
)

export default Applicant;