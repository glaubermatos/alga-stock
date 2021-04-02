import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import { connect, useDispatch } from 'react-redux'
import { RootState } from '../../redux'

import Table from '../../shared/Table'
import ProductForm from '../Products/ProductForm'

import { TableHeader } from '../../shared/Table/Table'
import { Product } from '../../shared/Table/Table.mockdata'
import { ProductCreator } from '../../components/Products/ProductForm'

import * as ProductsActions from '../../redux/Products/Products.actions'

const headers: TableHeader[] = [
    /* { key: '_id', value: '#' }, */
    { key: 'name', value: 'Product' },
    { key: 'price', value: 'Price', right: true },
    { key: 'stock', value: 'Available stock', right: true },
]

declare interface ProductsCRUDProps {
    products: Product[]
}

const ProductsCRUD: React.FC<ProductsCRUDProps> = (props) => {

    const dispatch = useDispatch()

    // const [products, setProducts] = useState<Product[]>([])
    const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(undefined)


    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        // const _products = await getAllProducts()
        // setProducts(_products)
        try {
            await dispatch(ProductsActions.getProducts())
        } catch (error) {
            Swal.fire('Oops!', error.message, 'error')
        }
    }

    const handleProductSubmit = async (newProduct: ProductCreator) => {
        try {
            /* await createSingleProduct(newProduct)
            fetchData() */
            await dispatch(ProductsActions.insertNewProduct(newProduct))
            Swal.fire('Uhul!', 'product successfully created!', 'success')
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
            /* await updateSingleProduct(updatingProduct)
            fetchData()*/
            await dispatch(ProductsActions.updateProduct(updatingProduct))
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

    const deleteProduct = async (id: string) => {
        /* setProducts(products.filter(product => product._id !== id)) */
        try {
            /* await deleteSingleProduct(id)
            fetchData() */
            await dispatch(ProductsActions.deleteProduct(id))
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

    return (<>
        <Table
            data={props.products}
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

const mapStateToProps = (state: RootState) => ({
    products: state.products
})

export default connect(mapStateToProps)(ProductsCRUD)