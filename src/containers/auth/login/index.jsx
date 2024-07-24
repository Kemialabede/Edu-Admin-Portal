import { useRef } from 'react';
import AuthLayout from '../../../components/layout/authLayout';
import Input from '../../../components/input';
import { Form, Formik } from 'formik';
import Button from '../../../components/button';
import './login.scss';
import { useLogin } from '../../../hooks/mutation/useLogin';
import { signInSchema } from '../../../utilities/validation';

const Login = () => {
  const formRef = useRef();
  const { mutate: signIn, isPending } = useLogin();

  return (
    <AuthLayout>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={signIn}
        validationSchema={signInSchema}
        innerRef={formRef}
      >
        {(formik) => (
          <Form className="login-container">
            <div>
              <h2>Login to your account</h2>
            </div>
            <Input
              title="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.errors.email}
              type="text"
            />
            <Input
              title="Password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.errors.password}
            />
            <Button
              theme="primary"
              size="lg"
              disabled={!formik.isValid}
              loading={isPending}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default Login;
