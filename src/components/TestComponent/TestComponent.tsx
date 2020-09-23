import React from 'react';
import './styles.css';

type User = {
    name: string;
    age: number;
    email: string;
}

type Props = {
    user: User;
}

const TestComponent = ({ user: {name, age, email} }: Props) => (
    <div className='TestComponent'>
        <p>Olá {name} vc tem {age} anos de idade</p>
        <span>{email}</span>
    </div>
)

export default TestComponent;