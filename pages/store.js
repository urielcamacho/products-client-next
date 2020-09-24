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
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({
        idProduct: "1022",
        nameProduct: "Carpa blanca",
        category: "Botanas",
        description: "carpa blanca para 100 perosnas",
        productQuantity: 3,
        status: false
    });

    //Get products from API when the Store loads the first time
    useEffect(() => {
        
        // Function that make a GET request for products via axios
        async function fetchMyAPI() {
            const { data } = await axios.get('http://localhost:8000/products');
            setProducts(data);
            console.log("Fetch products ", data)
        }

        fetchMyAPI()

    }, []);

    // Makes the product drawer form for create or edit visible
    const handleToggleDrawer = () => {
        setDrawer(!drawer);
    }

    const handleCategory = event => {
        setProduct({
            ...product,
            category: event.target.value
        })
    }

    const handleProductSubmit = async event => {
        event.preventDefault();
        try {
            const producto = await axios.post('http://localhost:8000/products', product);
            console.log("Product: ", producto);

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
                <Typography variant="h1" gutterBottom>
                    Store
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper style={{ 'flexGrow': 1 }}>        
                                <ProductTable 
                                    products={ products }
                                />
                        </Paper>
                    </Grid>
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
                </Grid>
                <ProductDrawer 
                    handleToggleDrawer={ handleToggleDrawer }
                    drawer={ drawer }
                    product= { product }
                    handleCategory={ handleCategory }
                    handleProductSubmit={ handleProductSubmit }
                />
            </Layout>
        </>
    );
}

export default Store;