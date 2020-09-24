import React from 'react';
import { Drawer } from '@material-ui/core';

import ProductForm from './ProductForm';

const ProductDrawer = props => (
    <Drawer anchor={ 'bottom' } open={ props.drawer } onClose={ props.handleToggleDrawer }>
        <ProductForm  { ...props }/>
    </Drawer>
);

export default ProductDrawer;