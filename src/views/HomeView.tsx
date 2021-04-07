import React from 'react'

import Header from '../components/Header'
import Container from '../shared/Container'
import ProductsCRUD from '../components/Products/ProductsCRUD'
import withPermission from '../utils/HOC/withPermission'

const HomeView = () => {
    return (<>
        <Header title='AlgaStock' />

        <Container >
            <ProductsCRUD />
        </Container>
    </>)
}

export default withPermission(['admin', 'customer'], '/login')(HomeView)