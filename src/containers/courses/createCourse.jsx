import Modal from '../../components/modal';
import Input from '../../components/input';
import Button from '../../components/button';
import { Form, Formik } from 'formik';
import Select from '../../components/select';
import { useFetchClasses } from '../../hooks/queries/useFetchClasses';
import { useRef } from 'react';
import { createCourseSchema } from '../../utilities/validation';
import { useCreateCourse } from '../../hooks/mutation/useCreateCourse';

const CreateCourse = ({ isShown, setIsShown }) => {
  const { data } = useFetchClasses({
    query: {},
  });
  const formRef = useRef();
  const { mutate: createCourse, isPending } = useCreateCourse({ setIsShown });

  return (
    <Modal title="Create Course" isShown={isShown} setIsShown={setIsShown}>
      <Formik
        initialValues={{
          name: '',
          class_id: '',
        }}
        innerRef={formRef}
        onSubmit={createCourse}
        validationSchema={createCourseSchema}
      >
        {(formik) => (
          <Form>
            <div style={{ marginBottom: '10px' }}>
              <Select
                title="Class Name"
                name="class_id"
                placeholder="Enter Class"
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
                Create course
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CreateCourse;
