import React from 'react';
import { Day } from '../Day';

export default function Picker() {

    this.state = {
        date : new Date()
    }

    onChange = date => {
        this.setState({
            date
        })
    }

    return (
        <>
         <Day onChange={this.onChange} />
         <p>Date choose : {this.state.Date.toLocaleDateString()}</p>   
        </>
    )
}
