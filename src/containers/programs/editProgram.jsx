import Modal from '../../components/modal';
import Input from '../../components/input';
import Button from '../../components/button';
import { Form, Formik } from 'formik';
import Select from '../../components/select';
import { useRef } from 'react';
import { createClassSchema } from '../../utilities/validation';
import { useFetchLevels } from '../../hooks/queries/useFetchLevels';
import { useEditClass } from '../../hooks/mutation/useEditClass';

const EditProgram = ({ isShown, setIsShown, currentRow }) => {
  const { data } = useFetchLevels({
    query: {},
  });
  const formRef = useRef();
  const currentLevel = data?.data?.filter(
    (item) => item.uuid === currentRow?.level_uuid,
  );

  const { mutate: editClass, isPending } = useEditClass({
    setIsShown,
    currentRow,
  });

  return (
    <Modal title="Edit Class" isShown={isShown} setIsShown={setIsShown}>
      <Formik
        initialValues={{
          name: currentRow?.class_name,
          level_uuid: currentRow?.level_uuid,
        }}
        innerRef={formRef}
        enableReinitialize
        onSubmit={editClass}
        validationSchema={createClassSchema}
      >
        {(formik) => {
          return (
            <Form>
              <div style={{ marginBottom: '10px' }}>
                <Select
                  title="Level"
                  name="level_uuid"
                  placeholder={currentLevel[0]?.name}
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
                  Save
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Modal>
  );
};

export default EditProgram;
