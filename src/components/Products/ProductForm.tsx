import React, { useState } from 'react'
import { TextChange } from 'typescript'
import Button from '../../shared/Button'
import Form from '../../shared/Form'
import Input from '../../shared/Input'

const formInitialProps = {
    name: '',
    price: '',
    stock: ''
}

const ProductForm = () => {

    const [form, setForm] = useState(formInitialProps)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target

        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <Form
            title="Product Form"
            onSubmit={() => { console.log(form) }}
        >
            <Input
                onChange={handleInputChange}
                name="name"
                label="Name"
                placeholder="E.g.: Cookie"
            />
            <Input
                onChange={handleInputChange}
                name="price"
                label="Price"
                type="number"
                step="0.01"
                min="0"
                placeholder="E.g.: 1.25"
            />
            <Input
                onChange={handleInputChange}
                name="stock"
                label="Stock"
                type="number"
                min="0"
                placeholder="E.g.: 20"
            />

            <Button>
                Submit
          </Button>
        </Form>
    )
}

export default ProductForm