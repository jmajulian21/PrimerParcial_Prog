import React, { Component } from 'react';
import Tabla from './Tabla';
import { withRouter } from "react-router-dom";

class TablaC extends Component {
    render() {
        let {headers,rows} = this.props
        return(
            <Tabla headers={headers} rows={rows} {...this.props}/>
        )
    }
}


export default withRouter(TablaC);