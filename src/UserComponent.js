import React, { Component } from 'react'

export default class UserComponent extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {nameUser, ageUser}=this.props;
        return (
            <div>
                <h1>Hola Amig@: {nameUser}</h1>
                <h1>Su edad es : {ageUser}</h1>
            </div>
        )
    }
}
