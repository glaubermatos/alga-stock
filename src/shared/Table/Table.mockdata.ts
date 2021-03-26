export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
}

const Products: Product[] = [
    {
        id: 1,
        name: 'Cookies',
        price: 0.75,
        stock: 20
    },
    {
        id: 2,
        name: 'Milk 1L',
        price: 0.99,
        stock: 30
    },
    {
        id: 3,
        name: 'Detergent',
        price: 0.70,
        stock: 120
    },
    {
        id: 4,
        name: 'Apple 1KG',
        price: 0.20,
        stock: 200
    },
    {
        id: 5,
        name: 'Cookies',
        price: 0.75,
        stock: 20
    },
]


export default Products