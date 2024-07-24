import { Form, Formik } from 'formik';
import Modal from '../../components/modal';
import Input from '../../components/input';
import Button from '../../components/button';
import { useUpdateGeneralSetting } from '../../hooks/mutation/useUpdateGeneralSetting';

const UpdateSettingModal = ({ isShown, setIsShown, data }) => {
  const { mutate: updateSetting, isPending } = useUpdateGeneralSetting({
    setIsShown,
  });
  return (
    <Modal
      title="Update Test Settings"
      isShown={isShown}
      setIsShown={setIsShown}
    >
      <Formik
        initialValues={{
          number_of_attempt: data?.number_of_attempt,
          time: data?.time,
          score_mark: data?.score_mark,
          instruction: data?.instruction,
          number_of_question: data?.number_of_question,
          uuid: data?.uuid
        }}
        enableReinitialize
        onSubmit={updateSetting}
      >
        {(formik) => (
          <Form>
            <div className="settings-container__update__inputFlex">
              <Input
                title="Attempts"
                name="number_of_attempt"
                value={formik.values.number_of_attempt}
                onChange={formik.handleChange}
                error={formik.errors.number_of_attempt}
                type="number"
              />
              <Input
                title="Time"
                name="time"
                value={formik.values.time}
                onChange={formik.handleChange}
                error={formik.errors.time}
                type="number"
              />
            </div>
            <div className="settings-container__update__inputFlex">
              <Input
                title="Score"
                name="score_mark"
                value={formik.values.score_mark}
                onChange={formik.handleChange}
                error={formik.errors.score_mark}
                type="number"
              />
              <Input
                title="Number of questions"
                name="number_of_question"
                value={formik.values.number_of_question}
                onChange={formik.handleChange}
                error={formik.errors.number_of_question}
                type="number"
              />
            </div>
            <div className="settings-container__update__textarea">
              <p>Instructions</p>
              <textarea
                value={formik.values.instruction}
                onChange={formik.handleChange}
                name="instruction"
              ></textarea>
              {formik.errors.instruction && (
                <p className="error">{formik.errors.instruction}</p>
              )}
            </div>

            <div className="create-program__btn">
              <Button
                theme="primary"
                size="sm"
                disabled={!formik.isValid}
                loading={isPending}
              >
                Update
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default UpdateSettingModal;
