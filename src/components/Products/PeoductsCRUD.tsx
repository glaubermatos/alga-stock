import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

import Header from '../Header'
import Container from '../../shared/Container'
import Table from '../../shared/Table'
import ProductForm from '../Products/ProductForm'

import { TableHeader } from '../../shared/Table/Table'
import { Product } from '../../shared/Table/Table.mockdata'
import { ProductCreator } from '../../components/Products/ProductForm'

import {
    getAllProducts,
    createSingleProduct,
    updateSingleProduct,
    deleteSingleProduct
} from '../../services/Products.service'

const headers: TableHeader[] = [
    /* { key: '_id', value: '#' }, */
    { key: 'name', value: 'Product' },
    { key: 'price', value: 'Price', right: true },
    { key: 'stock', value: 'Available stock', right: true },
]

const ProductsCRUD = () => {

    const [products, setProducts] = useState<Product[]>([])
    const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const _products = await getAllProducts()

        setProducts(_products)
    }


    const handleProductSubmit = async (product: ProductCreator) => {
        try {
            await createSingleProduct(product)
            fetchData()

        } catch (error) {
            Swal.fire('Oops!', error.message, 'error')
        }
    }

    const handleProductUpdate = async (updatingProduct: Product) => {
        /* setProducts(products.map(product =>
        product._id === updatingProduct._id
            ? updatingProduct
            : product
        )) */
        try {
            await updateSingleProduct(updatingProduct)
            fetchData()
            setUpdatingProduct(undefined)
        } catch (error) {
            Swal.fire('Oops!', error.message, 'error')
        }

    }

    const handleProductEdit = (product: Product) => {
        setUpdatingProduct(product)
    }

    const handleProductDetail = (product: Product) => {
        Swal.fire(
            'Product details',
            `${product.name} coast $${product.price} and we have ${product.stock} available in stock`,
            'info'
        )
    }

    const deleteProduct = async (id: string) => {
        /* setProducts(products.filter(product => product._id !== id)) */
        try {
            await deleteSingleProduct(id)
            fetchData()
            setUpdatingProduct(undefined)
            Swal.fire(
                'Uhul!',
                'Product has been deleted.',
                'success'
            )
        } catch (error) {
            Swal.fire('Oops!', error.message, 'error')
        }
    }

    const hadleProductDelete = (deletingProduct: Product) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#09f',
            cancelButtonColor: '#d33',
            confirmButtonText: `Yes, delete ${deletingProduct.name}!`
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(deletingProduct._id)
            }
        })

    }

    return (<>
        <Table
            data={products}
            headers={headers}
            enableActions
            onDelete={hadleProductDelete}
            onDetail={handleProductDetail}
            onEdit={handleProductEdit}
        />

        <ProductForm
            form={updatingProduct}
            onSubmit={handleProductSubmit}
            onUpdate={handleProductUpdate}
        />
    </>)
}

export default ProductsCRUD