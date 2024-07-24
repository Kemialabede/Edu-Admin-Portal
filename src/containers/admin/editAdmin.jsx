import Modal from '../../components/modal';
import Input from '../../components/input';
import Button from '../../components/button';
import { Form, Formik } from 'formik';
import Select from '../../components/select';

const EditAdmin = ({ isShown, setIsShown }) => {
  return (
    <Modal title="Edit Admin" isShown={isShown} setIsShown={setIsShown}>
      <Formik>
        <Form>
          <div>
            <Input
              title="Full Name"
              name="program"
              onChange={() => {}}
              type="text"
              placeholder="Enter full name"
            />
          </div>
          <div>
            <Input
              title="Email"
              name="program"
              onChange={() => {}}
              type="text"
              placeholder="Enter email address"
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <Select title="Role" />
          </div>
          <div className="create-program__btn">
            <Button theme="primary" size="sm">
              Edit
            </Button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

export default EditAdmin;
