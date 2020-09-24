import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { 
    Box,
    Button,
    Paper,
    Typography
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';

import Layout from '../containers/Layout';
import ProductTable from '../components/ProductTable';
import ProductDrawer from '../components/ProductDrawer';

const Store = () => {

    const [drawer, setDrawer] = useState(false);
    const [isEditing, setEditing] = useState(false);
    const [product, setProduct] = useState({});

    // Makes the product drawer form for create or edit visible
    const handleToggleDrawer = () => {
        setEditing(false);
        setProduct({});
        setDrawer(!drawer);
    }

    const handleIdProduct = event => {
        setProduct({
            ...product,
            idProduct: event.target.value
        });
    }

    const handleNameProduct = event => {
        setProduct({
            ...product,
            nameProduct: event.target.value
        });
    }

    const handleCategory = event => {
        setProduct({
            ...product,
            category: event.target.value
        });
    }

    const handleDescription = event => {
        setProduct({
            ...product,
            description: event.target.value
        });
    }

    const handleProductQuantity = event => {
        setProduct({
            ...product,
            productQuantity: event.target.value
        });
    }

    const handleStatus = event => {
        setProduct({
            ...product,
            status: event.target.value == 1 ? true : false
        });
        console.log("Status", product.status);
    }

    const handleProductSubmit = async event => {
        event.preventDefault();
        try {
            if(!isEditing) {
                const producto = await axios.post(`${process.env.API_URL}`, product);
            } else {
                const producto = await axios.put(`${process.env.API_URL}/${product._id}`, product);
            }
            if(producto) setDrawer(!drawer);

        } catch (e) {
            console.log("Error", e);
        }
    }

    const handleEditProduct = async id => {
        setEditing(true);
        try {
            const producto = await axios.get(`${process.env.API_URL}/${id}`, product);
            console.log("prod", producto)
            if(producto) {
                producto.data.status = producto.data.status ? 1 : 0;
                setProduct(producto.data);
                setDrawer(true);
            }

        } catch (e) {
            console.log("Error", e);
        }
    }

    const handleDeleteProduct = async id => {
        try {
            const producto = await axios.delete(`${process.env.API_URL}/${ id }`);
        } catch (e) {
            console.log("Error", e);
        }
    }

    return(
        <>
            <Head>
                <title>Página Store</title>
            </Head>
            <Layout>
                
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box style={{ 'marginTop': 24 }}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                startIcon={<AddIcon />}
                                onClick={ handleToggleDrawer }
                            >
                                Agrega un producto
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper style={{ 'flexGrow': 1 }}>        
                                <ProductTable
                                    handleDeleteProduct={ handleDeleteProduct }
                                    handleEditProduct={ handleEditProduct }
                                />
                        </Paper>
                    </Grid>
                </Grid>
                <ProductDrawer 
                    handleToggleDrawer={ handleToggleDrawer }
                    drawer={ drawer }
                    product= { product }
                    handleIdProduct={ handleIdProduct }
                    handleNameProduct={ handleNameProduct }
                    handleCategory={ handleCategory }
                    handleDescription={ handleDescription }
                    handleProductQuantity={ handleProductQuantity }
                    handleStatus={ handleStatus }
                    handleProductSubmit={ handleProductSubmit }
                    isEditing={ isEditing }
                />
            </Layout>
        </>
    );
}

export default Store;