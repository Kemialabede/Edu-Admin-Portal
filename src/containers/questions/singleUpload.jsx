import Input from '../../components/input';
import Select from '../../components/select';
import Button from '../../components/button';
import { Form, Formik } from 'formik';
import { useRef } from 'react';
import { useAddSingleQuestion } from '../../hooks/mutation/useAddSingleQuestion';
import { singleUploadSchema } from '../../utilities/validation';

const SingleUpload = ({ courses, setIsShown }) => {
  const formRef = useRef();
  const { mutate: createSingleUpload, isPending } = useAddSingleQuestion({
    setIsShown,
  });

  return (
    <Formik
      initialValues={{
        course_uuid: '',
        a: '',
        b: '',
        c: '',
        d: '',
        answer: '',
        question: '',
      }}
      onSubmit={createSingleUpload}
      validationSchema={singleUploadSchema}
      innerRef={formRef}
    >
      {(formik) => (
        <Form>
          <div>
            <Select
              title="Course"
              name="course_uuid"
              onChange={(e) => {
                formik.setFieldValue('course_uuid', e.target.value);
              }}
              placeholder="Select course"
              error={formik.errors.course_uuid}
              options={courses?.map((item) => ({
                label: item.name,
                value: item.uuid,
              }))}
            />
          </div>
          <br />
          <div>
            <div className="singleUpload__question">
              <p>Question</p>
              <textarea
                style={{ width: '96%' }}
                name="question"
                onChange={formik.handleChange}
                value={formik.values.question}
              ></textarea>
              {formik.errors.question && (
                <p className="error" style={{ marginTop: 'unset' }}>
                  {formik.errors.question}
                </p>
              )}
            </div>
            <div className="singleUpload__options">
              <Input
                title="Option A"
                name="a"
                value={formik.values.a}
                onChange={formik.handleChange}
                error={formik.errors.a}
              />
              <Input
                title="Option B"
                name="b"
                value={formik.values.b}
                onChange={formik.handleChange}
                error={formik.errors.b}
              />
              <Input
                title="Option C"
                name="c"
                value={formik.values.c}
                onChange={formik.handleChange}
                error={formik.errors.c}
              />
              <Input
                title="Option D"
                name="d"
                value={formik.values.d}
                onChange={formik.handleChange}
                error={formik.errors.d}
              />
            </div>
            <div>
              <Select
                title="Answer"
                name="answer"
                placeholder="Select an answer"
                options={[
                  { value: 'A', label: 'A' },
                  { value: 'B', label: 'B' },
                  { value: 'C', label: 'C' },
                  { value: 'D', label: 'D' },
                ]}
                value={formik.values.answer}
                onChange={(e) => formik.setFieldValue('answer', e.target.value)}
                error={formik.errors.answer}
              />
            </div>
          </div>
          <div className="create-program__btn">
            <Button
              theme="primary"
              size="sm"
              loading={isPending}
              type="submit"
              disabled={!formik.isValid}
            >
              Create Question
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SingleUpload;
