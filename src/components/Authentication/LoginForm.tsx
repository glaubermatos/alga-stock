import React, { ReactEventHandler, useState } from 'react'

import Button from '../../shared/Button'
import Form from '../../shared/Form'
import Input from '../../shared/Input'

const initialFormState = {
    user: '',
    password: ''
}

const LoginForm = () => {
    const [form, setForm] = useState(initialFormState)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleLogin = () => {
        console.log(form)
    }

    return <div className='App'>
        <Form
            onSubmit={handleLogin}
            title="Login AlgaStock"
        >
            <Input
                label="User"
                name="user"
                value={form.user}
                onChange={handleInputChange}
                placeholder="E.g.: your username"
            />
            <Input
                label="Password"
                name="password"
                value={form.password}
                onChange={handleInputChange}
                type="password"
            />
            <Button>
                Login
            </Button>
        </Form>
    </div>
}

export default LoginForm