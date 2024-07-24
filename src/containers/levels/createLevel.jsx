import { useRef } from 'react';
import Modal from '../../components/modal';
import Input from '../../components/input';
import Button from '../../components/button';
import { Form, Formik } from 'formik';
import { createLevelSchema } from '../../utilities/validation';
import { useCreateLevel } from '../../hooks/mutation/useCreateLevel';

const CreateLevel = ({ isShown, setIsShown }) => {
  const formRef = useRef();
  const { mutate: createLevel, isPending } = useCreateLevel({ setIsShown });

  return (
    <Modal title="Create Level" isShown={isShown} setIsShown={setIsShown}>
      <Formik
        initialValues={{
          name: '',
        }}
        validationSchema={createLevelSchema}
        innerRef={formRef}
        onSubmit={createLevel}
      >
        {(formik) => (
          <Form>
            <div>
              <Input
                title="Level"
                name="name"
                value={formik.values.name}
                error={formik.errors.name}
                onChange={formik.handleChange}
                type="text"
              />
            </div>
            <div className="create-program__btn">
              <Button
                theme="primary"
                size="sm"
                disabled={!formik.isValid}
                loading={isPending}
              >
                Create level
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CreateLevel;
