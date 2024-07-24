import Input from '../../components/input';
import { Form, Formik } from 'formik';
import Button from '../../components/button';
import { useRef } from 'react';
import { useChangePassword } from '../../hooks/mutation/useChangePassword';
import { changePasswordValidationSchema } from '../../utilities/validation';

const ChangePassword = () => {
  const formRef = useRef();

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.resetForm();
    }
  };

  const { mutate: changePassword, isPending } = useChangePassword(resetForm);

  return (
    <div className="password_setting__form">
      <h5>Change Password</h5>
      <Formik
        initialValues={{
          current_password: '',
          new_password: '',
          new_password_confirmation: '',
        }}
        validationSchema={changePasswordValidationSchema}
        innerRef={formRef}
        onSubmit={changePassword}
      >
        {(formik) => (
          <Form>
            <Input
              title="Password"
              type="password"
              name="current_password"
              value={formik.values.current_password}
              onChange={formik.handleChange}
              error={formik.errors.current_password}
            />
            <Input
              title="New Password"
              type="password"
              name="new_password"
              value={formik.values.new_password}
              onChange={formik.handleChange}
              error={formik.errors.new_password}
            />
            <Input
              title="Confirm Password"
              type="password"
              name="new_password_confirmation"
              value={formik.values.new_password_confirmation}
              onChange={formik.handleChange}
              error={formik.values.new_password_confirmation}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                theme="primary"
                size="sm"
                loading={isPending}
                disabled={!formik.isValid}
              >
                Confirm Password
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePassword;
