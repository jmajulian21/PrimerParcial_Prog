import React, { Component } from 'react';
import Header from './header/HeaderC';
import { Table, TableBody, TableRow, TableCell, Grid, IconButton,TextField } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
class Tabla extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            nombre: "",
            email: "",
            sueldo: ""
        }
    }

    editarOnClick = (id, nombre, email, sueldo) => {
        this.props.onEdit(id, nombre, email, sueldo);
    };

    eliminarOnClick = (id) => {
        this.props.onDelete(id);
    };

    onClickHabilitarEdicion = (id) =>{

    }

    render() {
        let { headers, rows } = this.props

        return (
            <div>
                <Grid container>
                    <Grid item xs={10}>
                        <Table>
                            <Header items={headers} />
                            <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow key={index} hover={true}>
                                        <TableCell > {row.id}</TableCell>
                                        <TableCell > {row.nombre}</TableCell>
                                        <TableCell > {row.email}</TableCell>
                                        <TableCell > {row.sueldo}</TableCell>
                                        <TableCell onClick={() => this.editarOnClick(row.id, row.nombre, row.email, row.sueldo)}>
                                            <IconButton >
                                                <EditIcon fontSize="small" />
                                            </IconButton>
                                        </TableCell>
                                        <TableCell onClick={() => this.eliminarOnClick(row.id)}>
                                            <IconButton >
                                                <DeleteIcon fontSize="small" />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
                <h4>Persona</h4>
                <Grid container direction="column">
                    <Grid item xs>
                        <TextField label="nombre"  value={this.state.nombre}/>
                        <TextField label="email"  value={this.state.email}/>
                    </Grid>
                    <Grid item xs>
                        <TextField label="sueldo"  value={this.state.sueldo}/>
                    </Grid>
                    <Grid item xs>
                        <Grid container>
                            <Grid item xs={3} />
                            <Grid item xs={1}>
                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

//Buscar la manera que la linea 15 a 18 sea dinamico. Preguntar Profesor.
export default Tabla;