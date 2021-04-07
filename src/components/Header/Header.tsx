import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

import { RootState } from '../../redux'
import { logout } from '../../redux/Authentication/Authentication.actions'
import { User } from '../../services/Authentication.service'

import './styles.css'

declare interface HeaderProps {
    title: string
    stockProducts: number
    profile?: User
}

const Header: React.FC<HeaderProps> = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const isLoggedIn = !!props.profile?._id

    const handleLoginLogout = () => {
        isLoggedIn
            ? askLogout()
            : history.push('/login')
    }

    const askLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#09f',
            cancelButtonColor: '#d33',
        }).then(({ isConfirmed }) => { isConfirmed && dispatch(logout()) })
    }

    return (
        <header className='AppHeader'>
            <h1>{props.title}</h1>
            <p>
                Stock <strong>{props.stockProducts}</strong>
            </p>
            <span style={{ cursor: 'pointer' }}
                onClick={handleLoginLogout}
            >
                {isLoggedIn ? 'Logout' : 'Login'}
            </span>
        </header>
    )
}

const mapStateToProps = (state: RootState) => ({
    stockProducts: state.products.length,
    profile: state.authentication?.profile
})

export default connect(mapStateToProps)(Header)