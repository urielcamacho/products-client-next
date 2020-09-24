import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button
} from '@material-ui/core';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

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
        <MaterialTable
            title="Products"
            icons={ tableIcons }
            columns={[
                { title: 'Acciones',
                    field: '_id',
                    render: rowData => <>
                        <Button onClick={ () => props.handleEditProduct(rowData._id) }>Editar</Button>
                        <Button onClick={ () => props.handleDeleteProduct(rowData._id) }>Eliminar</Button>
                    </>,
                    filtering: false
                },
                { title: 'Id', field: 'idProduct', filtering: false },
                { title: 'Name', field: 'nameProduct' },
                { title: 'Category', field: 'category', lookup: { "Bebidas": "Bebidas", "Limpieza": "Limpieza", "Botanas": "Botanas", "Cremería": "Cremería" }},
                { title: 'Cantidad', field: 'productQuantity', filtering: false },
                { title: 'Status', field: 'status',
                    render: rowData => <>
                        {rowData.status ? "Disponible" : "Agotado"}
                    </>,
                filtering: false },
                { title: 'Creado', field: 'timeStamp', render: rowData => formatDate(rowData.timeStamp), filtering: false },
            ]}
            options={{
                search: false
            }}
            data={query =>
                new Promise((resolve, reject) => {
                let url = `${process.env.API_URL}/${query.pageSize}/${query.page}`;
                fetch(url)
                    .then(response => response.json())
                    .then(result => {
                        console.log(result);
                        resolve({
                            data: result.products,
                            page: result.page,
                            totalCount: result.totalCount,
                        })
                    })
                })
            }
            options={{
                filtering: true
            }}   
        />
    );

}

export default ProductTable;