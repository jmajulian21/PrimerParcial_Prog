import React, { Component } from 'react';
import { Grid,Button,Toolbar,AppBar } from '@material-ui/core';

class Menu extends Component {

    ir = to => {
        this.props.history.push(to);
    }

    render() {
        let {items} = this.props
        return(
            <AppBar position="static">
                <Toolbar>
                    <Grid container>
                        <Grid item xs={11}>
                        {items.map(menuItem => (
                                <Button color="inherit" key={menuItem.id} onClick={() => this.ir(menuItem.url)}>
                                    {menuItem.label}
                                </Button>
                            ))}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        )
    }
}


export default Menu;