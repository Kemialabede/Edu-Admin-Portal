import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '../../components/layout';
import { useFetchQuestion } from '../../hooks/queries/useFetchQuestion';
import { Form, Formik, Field } from 'formik';
import Input from '../../components/input';
import { useUpdateQuestion } from '../../hooks/mutation/useUpdateQuestion';
import { BiSolidEdit } from 'react-icons/bi';
import { IoArrowBack } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import Button from '../../components/button';
import PageLoader from '../../components/loader/pageLoader';
import Select from '../../components/select';
import { useDeleteQuestion } from '../../hooks/mutation/useDeleteQuestion';
import { Spinner } from 'evergreen-ui';
import { useUserContext } from '../../contexts/userContexts';

const QuestionCard = ({ questionData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { mutate: editQuestion, isPending } = useUpdateQuestion();
  const { mutate: deleteQuestion, isPending: isPendingDelete } =
    useDeleteQuestion(questionData?.uuid);

  const presentOptions = Object.entries(questionData)
    .filter(
      ([key, value]) =>
        ['a', 'b', 'c', 'd'].includes(key) && value !== undefined,
    )
    .map(([key, value]) => ({ key, value }));

  const handleSave = async (values) => {
    await editQuestion({
      question_uuid: questionData?.uuid,
      question: values.question,
      a: values.a,
      b: values.b,
      c: values.c,
      d: values.d,
      answer: values.answer,
    });
    setIsEditing(false);
  };

  const { userData } = useUserContext();
  const permissions = userData?.admin?.permissions;

  return (
    <div className="question-card">
      {isEditing ? (
        <Formik initialValues={questionData} onSubmit={handleSave}>
          {({ isSubmitting, setFieldValue, values }) => (
            <Form>
              <Field name="question" as={Input} title="Question" />
              <div className="options__grid">
                {presentOptions.map(({ key }) => (
                  <Field
                    key={key}
                    name={key}
                    as={Input}
                    title={`Option ${key.toUpperCase()}`}
                  />
                ))}
              </div>
              <Field name="answer">
                {({ field }) => (
                  <Select
                    title="Correct Answer"
                    options={[
                      { value: 'A', label: 'A' },
                      { value: 'B', label: 'B' },
                      { value: 'C', label: 'C' },
                      { value: 'D', label: 'D' },
                    ]}
                    placeholder={
                      questionData?.answer?.toUpperCase() ||
                      'Select correct answer'
                    }
                    value={values.answer}
                    onChange={(e) => setFieldValue('answer', e.target.value)}
                    error={field.error}
                  />
                )}
              </Field>
              <br />
              <div className="question-card__editBtn">
                <Button
                  type="submit"
                  disabled={isPending}
                  theme="primary"
                  loading={isPending}
                  size="sm"
                >
                  {isPending ? 'Saving...' : 'Save'}
                </Button>

                <Button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  size="sm"
                >
                  Cancel
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        <>
          <div className="question-card__heading">
            <h2>{questionData.question}</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              {(permissions?.includes('edit_question') ||
                permissions === 'all') && (
                <BiSolidEdit onClick={() => setIsEditing(true)} />
              )}
              {isPendingDelete ? (
                <Spinner size={16} />
              ) : (
                <MdDelete onClick={() => deleteQuestion()} />
              )}
            </div>
          </div>
          <div className="options">
            {presentOptions?.map(
              ({ key, value }) =>
                value?.length && (
                  <div key={key} className="options__radio">
                    <input
                      type="radio"
                      checked={
                        questionData?.answer?.toUpperCase() ===
                        key.toUpperCase()
                      }
                      readOnly
                    />
                    <p>{value}</p>
                  </div>
                ),
            )}
          </div>
          <p>Correct Answer: {questionData?.answer?.toUpperCase()}</p>
        </>
      )}
    </div>
  );
};

const ViewQuestions = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data: questions, isFetching } = useFetchQuestion(params?.id);

  return (
    <DashboardLayout>
      <div className="view-questions">
        <div onClick={() => navigate(-1)} className="view-questions__header">
          <IoArrowBack style={{ width: '25px', height: '25px' }} />
          <h2>{params?.course}</h2>
        </div>
        {!isFetching ? (
          questions?.data?.map((question) => (
            <QuestionCard key={question.uuid} questionData={question} />
          ))
        ) : (
          <PageLoader />
        )}
        {questions?.data?.length === 0 && (
          <div className="courseMaterials__empty">
            <img src="/src/assets/icons/placeholder.png" />
            <p>No questions available</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ViewQuestions;
