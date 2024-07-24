import Modal from '../../components/modal';
import Input from '../../components/input';
import Button from '../../components/button';
import { Form, Formik } from 'formik';
import Select from '../../components/select';
import { useFetchLevels } from '../../hooks/queries/useFetchLevels';
import { useCreateClass } from '../../hooks/mutation/useCreateClass';
import { useRef } from 'react';
import { createClassSchema } from '../../utilities/validation';

const CreateProgram = ({ isShown, setIsShown, level }) => {
  const { data } = useFetchLevels({
    query: {},
  });
  const formRef = useRef();
  const { mutate: createClass, isPending } = useCreateClass({ setIsShown });

  return (
    <Modal title="Create Class" isShown={isShown} setIsShown={setIsShown}>
      <Formik
        initialValues={{
          name: '',
          level_uuid: '',
        }}
        innerRef={formRef}
        onSubmit={createClass}
        validationSchema={createClassSchema}
      >
        {(formik) => (
          <Form>
            <div style={{ marginBottom: '10px' }}>
              <Select
                title="Level"
                name="level_uuid"
                placeholder="Enter level"
                options={data?.data?.map((item) => ({
                  label: item.name,
                  value: item.uuid,
                }))}
                onChange={(e) => {
                  formik.setFieldValue('level_uuid', e.target.value);
                }}
                error={formik.errors.level_uuid}
              />
            </div>
            <div>
              <Input
                title="Class"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
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
                Create class
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CreateProgram;
