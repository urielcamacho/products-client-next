import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@material-ui/core';
import MaterialTable from 'material-table';

function createData(actions, idProduct, nameProduct, category, description, productQuantity, status, createdAt) {
    return { actions, idProduct, nameProduct, category, description, productQuantity, status, createdAt };
}

const ProductTable = props => {

    function formatDate(string){
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }

    let products = props.products;

    return(
        <>
        <MaterialTable
            title="Render Image Preview"
            columns={[
                { title: 'Acciones', field: '_id', render: rowData => rowData._id },
                { title: 'Id', field: 'idProduct' },
                { title: 'Name', field: 'nameProduct' },
                { title: 'Category', field: 'category' },
                { title: 'Cantidad', field: 'productQuantity' },
                { title: 'Status', field: 'status' },
                { title: 'Creado', field: 'timeStamp', render: rowData => formatDate(rowData._id) },
            ]}
            data={ products }        
        />

        <TableContainer>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Acciones</TableCell>
                        <TableCell align="right">Id</TableCell>
                        <TableCell align="right">Nombre</TableCell>
                        <TableCell align="right">Categoría</TableCell>
                        <TableCell align="right">Descripción</TableCell>
                        <TableCell align="right">Cantidad</TableCell>
                        <TableCell align="right">Estado</TableCell>
                        <TableCell align="right">Fecha creación</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { console.log("PRODUCTOS ->", props.products)}
                    { products.map( product => (
                        <TableRow key={product._id}>
                            <TableCell component="th" scope="row">
                                Editar / Eliminar
                            </TableCell>
                            <TableCell align="right">{ product._id }</TableCell>
                            <TableCell align="right">{ product.nameProduct }</TableCell>
                            <TableCell align="right">{ product.category }</TableCell>
                            <TableCell align="right">{ product.description }</TableCell>
                            <TableCell align="right">{ product.productQuantity }</TableCell>
                            <TableCell align="right">{ product.status > 0 ? "Disponibles" : "Agotados" }</TableCell>
                            <TableCell align="right">{ formatDate(product.timeStamp) }</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );

}

export default ProductTable;