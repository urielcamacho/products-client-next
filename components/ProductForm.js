import React from 'react';
import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';

const ProductForm = props => {

    const categories = ["Bebidas", "Limpieza", "Botanas", "Cremería"];

    return(
        <form onSubmit={ props.handleProductSubmit }>
        <Container fixed>
            <Grid container style={{ 'paddingBottom': 40 }}>
                <Grid item xs={12}>
                    <Typography 
                        variant="h2"
                        gutterBottom
                        style={{ 
                            'textAlign': 'center',
                            'marginTop': 18,
                            'width': '100%'
                        }}>
                        ¡Agrega un nuevo producto!
                    </Typography>
                </Grid>
                <Grid container xs={12} md={3} style={{ 
                        'justifyContent': 'center',
                        'marginBottom': '30px'    
                    }}>
                    <TextField 
                        id="idProduct" 
                        label="Id"
                        variant="outlined"
                        style={{ 
                                'width': '90%'
                            }}
                        />
                </Grid>
                <Grid container xs={12} md={3} style={{ 
                        'justifyContent': 'center',
                        'marginBottom': '30px'    
                    }}>
                    <TextField 
                        id="nameProduct"
                        label="Nombre"
                        variant="outlined"
                        style={{
                            'width': '90%'
                            }}
                        />
                </Grid>
                <Grid container xs={12} md={3} style={{ 
                    'justifyContent': 'center'
                }}>
                    <FormControl variant="outlined" style={{ 'width': '90%'}}>
                        <InputLabel id="category-label">Category</InputLabel>
                        <Select
                            labelId="category-label"
                            id="category"
                            value={props.product.category}
                            onChange={() => props.handleCategory}
                            label="Categoría"
                            >
                            { categories.map( category => (
                                    <MenuItem key={ category } value={ category }>{ category }</MenuItem>
                                ))
                            }
                        
                        </Select>
                    </FormControl>
                </Grid>
                <Grid 
                    container
                    xs={12}
                    md={3}
                    style={{ 
                        'justifyContent': 'center',
                        'marginBottom': '30px'    
                    }}>
                    <TextField 
                        id="productQuantity" 
                        label="Cantidad"
                        variant="outlined"
                        type="number"
                        InputProps={{ inputProps: { min: 0 } }}
                        style={{ 
                                'width': '90%'
                            }}
                        />
                </Grid>
                <Grid 
                    container 
                    xs={12}
                    md={8}
                    style={{ 'justifyContent': 'center' }}
                    >
                    <TextField 
                        id="description"
                        label="Descripción"
                        variant="outlined"
                        multiline={true}
                        style={{ 'width': '95%' }}
                        />
                </Grid>
                <Grid container xs={12} justify="flex-end">
                    <Button variant="contained" color="primary" type="submit">
                        Crear producto
                    </Button>
                </Grid>
            </Grid>
        </Container>
        </form>
    )
}

export default ProductForm;