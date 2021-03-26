import React, { useState } from 'react';
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

  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(products[0])

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

  return (
    <div className="App">
      <Header title='AlgaStock' />

      <Container >
        <Table data={products} headers={headers} />

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
