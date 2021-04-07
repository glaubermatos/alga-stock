import React, { useEffect, useState } from 'react'
import Button from '../../shared/Button'
import Form from '../../shared/Form'
import Input from '../../shared/Input'
import { Product } from '../../shared/Table/Table.mockdata'
import withPermission from '../../utils/HOC/withPermission'

declare interface InitialFormState {
    _id?: string
    name: string
    price: string
    stock: string
}

export interface ProductCreator {
    name: string
    price: number
    stock: number
}

interface ProductFormProps {
    form?: Product
    onSubmit?: (product: ProductCreator) => void
    onUpdate?: (product: Product) => void
}

const ProductForm: React.FC<ProductFormProps> = (props) => {

    const initialFormState: InitialFormState = props.form
        ? {
            _id: props.form._id,
            name: props.form.name,
            price: String(props.form.price),
            stock: String(props.form.stock)
        }
        : {
            name: '',
            price: '',
            stock: ''
        }

    const [form, setForm] = useState(initialFormState)

    useEffect(() => {
        setForm(initialFormState)
        // eslint-disable-next-line
    }, [props.form])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target

        setForm({
            ...form,
            [name]: value
        })
    }

    const upadteProduct = (product: InitialFormState) => {
        const productDto = {
            _id: String(product._id),
            name: product.name,
            price: parseFloat(product.price),
            stock: Number(product.stock),
        }

        props.onUpdate &&
            props.onUpdate(productDto)
    }

    const createProduct = (product: InitialFormState) => {
        const productDto = {
            name: String(product.name),
            price: parseFloat(product.price),
            stock: Number(product.stock)
        }

        props.onSubmit &&
            props.onSubmit(productDto)
    }

    const handleFormSubmit = () => {
        form._id
            ? upadteProduct(form)
            : createProduct(form)

        setForm(initialFormState)
    }

    return (
        <Form
            title="Product Form"
            onSubmit={handleFormSubmit}
        >
            <Input
                onChange={handleInputChange}
                value={form.name}
                name="name"
                label="Name"
                placeholder="E.g.: Cookie"
                required
            />
            <Input
                onChange={handleInputChange}
                value={form.price}
                name="price"
                label="Price"
                type="number"
                step="0.01"
                min="0"
                placeholder="E.g.: 1.25"
                required
            />
            <Input
                onChange={handleInputChange}
                value={form.stock}
                name="stock"
                label="Stock"
                type="number"
                min="0"
                placeholder="E.g.: 20"
                required
            />

            <Button>
                {form._id ? 'Update' : 'Submit'}
            </Button>
        </Form>
    )
}

export default withPermission(['admin', 'customer'])(ProductForm)