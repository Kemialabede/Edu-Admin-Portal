import Modal from '../../components/modal';
import Input from '../../components/input';
import Button from '../../components/button';
import { Form, Formik } from 'formik';
import { useRef } from 'react';
import { createLevelSchema } from '../../utilities/validation';
import { useEditLevel } from '../../hooks/mutation/useEditLevel';

const EditLevel = ({ isShown, setIsShown, currentLevel }) => {
  const formRef = useRef();

  const { mutate: editLevel, isPending } = useEditLevel({
    setIsShown,
    currentLevel,
  });

  return (
    <Modal title="Edit Level" isShown={isShown} setIsShown={setIsShown}>
      <Formik
        initialValues={{
          name: currentLevel?.name,
        }}
        innerRef={formRef}
        enableReinitialize
        validationSchema={createLevelSchema}
        onSubmit={editLevel}
      >
        {(formik) => (
          <Form>
            <div>
              <Input
                title="Level"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                error={formik.errors.name}
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
                Edit level
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default EditLevel;
