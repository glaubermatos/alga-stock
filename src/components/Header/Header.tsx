import React from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../redux'

import './styles.css'

declare interface HeaderProps {
    title: string
    stockProducts: number
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header className='AppHeader'>
            <h1>{props.title}</h1>
            <p>
                Stock <strong>{props.stockProducts}</strong>
            </p>
        </header>
    )
}

const mapStateToProps = (state: RootState) => ({
    stockProducts: state.products.length
})

export default connect(mapStateToProps)(Header)