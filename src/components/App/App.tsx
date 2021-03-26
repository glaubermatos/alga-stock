import React, { useState } from 'react';
import Swal from 'sweetalert2'

import Container from '../../shared/Container';
import Table from '../../shared/Table';
import { TableHeader } from '../../shared/Table/Table';
import Products, { Product } from '../../shared/Table/Table.mockdata';
import Header from '../Header';
import ProductForm, { ProductCreator } from '../Products/ProductForm';
import './App.css';

const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available stock', right: true },
]


function App() {

  const [products, setProducts] = useState(Products)

  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>()

  const handleProductSubmit = (product: ProductCreator) => {
    setProducts([
      ...products,
      {
        id: products.length + 1,
        ...product
      }
    ])
  }

  const handleProductUpdate = (updatedProduct: Product) => {
    setProducts(products.map(product =>
      product.id === updatedProduct.id
        ? updatedProduct
        : product
    ))

    setUpdatingProduct(undefined)
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

  const deleteProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id))
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

        deleteProduct(deletingProduct.id)

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  }

  return (
    <div className="App">
      <Header title='AlgaStock' />

      <Container >
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
      </Container>
    </div>
  );
}

export default App;
