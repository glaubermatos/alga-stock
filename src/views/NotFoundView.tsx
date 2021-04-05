import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundView = () => {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
    }}>
        <h1 style={{
            color: '#09f',
            fontWeight: 900,
        }}>404</h1>
        <p>Não encontrado</p>
        <Link to='/' style={{
            color: '#09f',
            textDecoration: 'none',
            textTransform: 'uppercase',
            marginTop: 10
        }}>
            Voltar para a Home
        </Link>
    </div>
}

export default NotFoundView