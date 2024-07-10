import React from 'react'
import AuthLayout from '../../../components/layout/authLayout'
import Input from '../../../components/input'
import { Form, Formik } from 'formik'
import Button from '../../../components/button'
import './login.scss'

const Login = () => {
  return (
    <AuthLayout>
        <Formik>
            <Form className='login-container'>
                <div>
                    <h2>Login to your account</h2>
                </div>
        <Input title="Email" />
        <Input title="Password" type="password" />
        <Button theme="primary" size="lg">Login</Button>
        </Form>
        </Formik>
    </AuthLayout>
  )
}

export default Login