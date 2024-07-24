import Modal from '../../components/modal';
import Input from '../../components/input';
import Button from '../../components/button';
import { Form, Formik } from 'formik';
import Select from '../../components/select';
import { useRef } from 'react';
import { adminSchema } from '../../utilities/validation';
import { useCreateAdmin } from '../../hooks/mutation/useCreateAdmin';

const CreateAdmin = ({ isShown, setIsShown }) => {
  const formRef = useRef();
  const { mutate: createAdmin, isPending } = useCreateAdmin({ setIsShown });
  return (
    <Modal title="Create Admin" isShown={isShown} setIsShown={setIsShown}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          role: '',
        }}
        innerRef={formRef}
        validationSchema={adminSchema}
        onSubmit={createAdmin}
      >
        {(formik) => (
          <Form>
            <div>
              <Input
                title="Full Name"
                name="name"
                onChange={formik.handleChange}
                type="text"
                placeholder="Enter full name"
                error={formik.errors.name}
              />
            </div>
            <div>
              <Input
                title="Email"
                name="email"
                onChange={formik.handleChange}
                error={formik.errors.email}
                type="text"
                placeholder="Enter email address"
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <Select
                title="Role"
                placeholder="Select Role"
                name="role"
                onChange={(e) => {
                  formik.setFieldValue('role', e.target.value);
                }}
                error={formik.errors.role}
                options={[
                  {
                    label: 'Super Admin',
                    value: 'super-admin',
                  },
                  {
                    label: 'Admin',
                    value: 'admin',
                  },
                ]}
              />
            </div>
            <div className="create-program__btn">
              <Button theme="primary" size="sm" loading={isPending}>
                Create
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CreateAdmin;
