import Modal from '../../components/modal'
import Input from '../../components/input'
import Button from '../../components/button'
import { Form, Formik } from 'formik'

const CreateLevel = ({ isShown, setIsShown }) => {
  return (
    <Modal title="Create Level" isShown={isShown} setIsShown={setIsShown}>
        <Formik>
        <Form>
        <div>
            <Input title="Level" name="program" onChange={() => {}} type="text" />
        </div>
        <div className="create-program__btn">
        <Button theme="primary" size="sm">Create level</Button>
        </div>
        </Form>
        </Formik>
    </Modal>
  )
}

export default CreateLevel