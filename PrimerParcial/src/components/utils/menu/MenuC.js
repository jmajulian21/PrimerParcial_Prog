import React, { Component } from 'react';
import Menu from './Menu';
import { withRouter } from "react-router-dom";

class MenuC extends Component {
    render() {
        let {items} = this.props

        return(
            <Menu items={items} {...this.props}/>
        )
    }
}

export default withRouter(MenuC);