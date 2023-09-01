/* import React, { Component } from 'react'

export default class Header extends Component {
    render(this.props) {
        return (
            <header>
                <div className="container">
                    <div className="contain-title">
                        <h1 className='title'>Rick And Morty</h1>
                        <p className="text">Este proyecto ilustra los personajes de la famosa serie Rick And</p>
                    </div>
                </div>
            </header>
        )
    }
} */



import React from 'react'

export default function Header( {title} ) {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="content">
                        <h1 className='title'>{title}</h1>
                        <p className="text">Este proyecto ilustra los personajes de la famosa serie Rick And Morty</p>
                    </div>
                </div>
            </header>
        </div>
    )
}

