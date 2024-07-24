import Modal from '../../components/modal';
import Input from '../../components/input';
import Button from '../../components/button';
import { Form, Formik } from 'formik';
import Select from '../../components/select';
import { useFetchCourses } from '../../hooks/queries/useFetchCourses';
import { useRef } from 'react';
import { useEditCourseMaterial } from '../../hooks/mutation/useEditCourseMaterial';
import { editCourseMaterialSchema } from '../../utilities/validation';

const EditCourseMaterial = ({ isShown, setIsShown, currentRow }) => {
  const formRef = useRef();
  const { data } = useFetchCourses({
    query: {},
  });
  const { mutate: editCourseMaterial, isPending } = useEditCourseMaterial({
    setIsShown,
    currentRow,
  });

  const currentCourse = data?.data?.filter(
    (item) => item.uuid === currentRow?.course_uuid,
  );

  return (
    <Modal
      title="Edit Course Material"
      isShown={isShown}
      setIsShown={setIsShown}
    >
      <Formik
        initialValues={{
          course_uuid: currentRow?.course_uuid,
          material_name: currentRow?.material_name,
        }}
        enableReinitialize
        innerRef={formRef}
        onSubmit={editCourseMaterial}
        validationSchema={editCourseMaterialSchema}
      >
        {(formik) => (
          <Form>
            <div style={{ marginBottom: '10px' }}>
              <Select
                title="Course Name"
                name="course_uuid"
                placeholder={currentCourse[0]?.name}
                options={data?.data?.map((item) => ({
                  label: item.name,
                  value: item.uuid,
                }))}
                onChange={(e) => {
                  formik.setFieldValue('course_uuid', e.target.value);
                }}
                error={formik.errors.course_uuid}
              />
            </div>
            <div>
              <Input
                title="Material name"
                name="material_name"
                value={formik.values.material_name}
                onChange={formik.handleChange}
                error={formik.errors.material_name}
                type="text"
              />
            </div>

            <div className="create-program__btn">
              <Button
                theme="primary"
                size="sm"
                loading={isPending}
                disabled={!formik.isValid}
              >
                Save
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default EditCourseMaterial;
