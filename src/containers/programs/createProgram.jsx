import Modal from '../../components/modal'
import Input from '../../components/input'
import Button from '../../components/button'
import { Form, Formik } from 'formik'
import Select from '../../components/select'

const CreateProgram = ({ isShown, setIsShown }) => {
  return (
    <Modal title="Create Class" isShown={isShown} setIsShown={setIsShown}>
        <Formik>
        <Form>
            <div style={{ marginBottom: '10px'}}>
            <Select title="Level" />
        </div>
        <div>
            <Input title="Class" name="program" onChange={() => {}} type="text" />
        </div>
         
        <div className="create-program__btn">
        <Button theme="primary" size="sm">Create class</Button>
        </div>
        </Form>
        </Formik>
    </Modal>
  )
}

export default CreateProgram