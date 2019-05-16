import React, { Component } from 'react';
import Header from './Header';

class HeaderC extends Component {
    render() {
        let {items} = this.props
        return(
            <Header items={items}/>
        )
    }
}


export default HeaderC;