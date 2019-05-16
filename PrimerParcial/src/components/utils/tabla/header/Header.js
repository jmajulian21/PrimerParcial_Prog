import React, { Component } from 'react';
import { TableHead,TableRow,TableCell } from '@material-ui/core';

class Header extends Component {
    render() {
        let {items} = this.props
        return(
            <TableHead>
                <TableRow>{items.map((item,index) => (
                    <TableCell key={index}>{item.toString()}</TableCell>))}
                </TableRow>
            </TableHead>
        )
    }
}


export default Header;