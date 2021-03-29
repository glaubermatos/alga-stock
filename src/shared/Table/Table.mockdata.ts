export interface Product {
    _id: string
    name: string
    price: number
    stock: number
    createdAt?: string
    updatedAt?: string
}

const Products: Product[] = [
    {
        _id: '1',
        name: 'Cookies',
        price: 0.75,
        stock: 20
    },
    {
        _id: '2',
        name: 'Milk 1L',
        price: 0.99,
        stock: 30
    },
    {
        _id: '3',
        name: 'Detergent',
        price: 0.70,
        stock: 120
    },
    {
        _id: '4',
        name: 'Apple 1KG',
        price: 0.20,
        stock: 200
    },
    {
        _id: '5',
        name: 'Cookies',
        price: 0.75,
        stock: 20
    },
]


export default Products