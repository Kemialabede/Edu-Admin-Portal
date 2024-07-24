import Modal from '../../components/modal';
import Input from '../../components/input';
import Button from '../../components/button';
import { Form, Formik } from 'formik';
import Select from '../../components/select';
import { useFetchClasses } from '../../hooks/queries/useFetchClasses';
import { useEditCourse } from '../../hooks/mutation/useEditCourse';
import { useRef } from 'react';
import { createCourseSchema } from '../../utilities/validation';

const EditCourse = ({ isShown, setIsShown, currentRow }) => {
  const formRef = useRef();
  const { data } = useFetchClasses({});
  const { mutate: editCourse, isPending } = useEditCourse({
    setIsShown,
    currentRow,
  });

  const currentClass = data?.data?.filter(
    (item) => item.uuid === currentRow?.class_uuid,
  );

  return (
    <Modal title="Edit Course" isShown={isShown} setIsShown={setIsShown}>
      <Formik
        initialValues={{
          name: currentRow?.name,
          class_id: currentRow?.class_uuid,
        }}
        innerRef={formRef}
        onSubmit={editCourse}
        validationSchema={createCourseSchema}
      >
        {(formik) => (
          <Form>
            <div style={{ marginBottom: '10px' }}>
              <Select
                title="Class Name"
                name="class_id"
                placeholder={currentClass[0]?.name}
                options={data?.data?.map((item) => ({
                  label: item.class_name,
                  value: item.uuid,
                }))}
                onChange={(e) => {
                  formik.setFieldValue('class_id', e.target.value);
                }}
                error={formik.errors.class_id}
              />
            </div>
            <div>
              <Input
                title="Course name"
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
                Edit course
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default EditCourse;
