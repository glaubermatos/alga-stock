import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'

import { login } from '../../redux/Authentication/Authentication.actions'

import Button from '../../shared/Button'
import Form from '../../shared/Form'
import Input from '../../shared/Input'

const initialFormState = {
    user: '',
    pass: ''
}

const LoginForm = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState(initialFormState)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleLogin = async () => {
        try {
            await dispatch(login(form))

        } catch (error) {
            Swal.fire(
                'Oops!',
                error.response?.data?.message || error.message,
                'error'
            )
        }
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
                name="pass"
                value={form.pass}
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