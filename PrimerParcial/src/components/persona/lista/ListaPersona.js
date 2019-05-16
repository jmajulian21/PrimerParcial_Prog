import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Tabla from '../../utils/tabla/TablaC';

let headers = ["Id", "Nombre", "Email", "Sueldo", "Editar", "Eliminar"]


class ListaPersona extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [{ id: 1, nombre: "Julian M.", email: "julian.moreno@hotmail.com", sueldo: "23432" },
      { id: 2, nombre: "Hernan P.", email: "julian.moreno@hotmail.com", sueldo: "27000" }]
    }
    this.eliminarRow = this.eliminarRow.bind(this);
    this.editarRow = this.editarRow.bind(this);
    this.agregarRow = this.agregarRow.bind(this);
  }

  eliminarRow(id) {
    let temp = [...this.state.rows];
    temp = temp.filter(row => row.id === id);
    this.setState({ rows: temp });
  }

  editarRow(id, nombre, email, sueldo) {
    let temp = [...this.state.rows];
    const index = temp.findIndex((item) => item.id === id);
    temp[index] = { id: id, nombre: nombre, email: email, sueldo: sueldo };
    this.setState({ rows: temp });
  }

  agregarRow(id, nombre, email, sueldo) {
    let temp = [...this.state.rows];
    temp.push({ id: id, nombre: nombre, email: email, sueldo: sueldo });
    this.setState({ rows: temp });
  }

  render() {
    return (
      <div>
          <Tabla headers={headers} rows={this.state.rows} onDelete={this.eliminarRow} 
                                                            onEdit={this.editarRow}/>
      </div>
    );
  }
}
export default ListaPersona;
