import Modal from '../../components/modal'
import Input from '../../components/input'
import Button from '../../components/button'
import { Form, Formik } from 'formik'
import Select from '../../components/select'

const CreateCourse = ({ isShown, setIsShown }) => {
  return (
    <Modal title="Create Course" isShown={isShown} setIsShown={setIsShown}>
        <Formik>
                 <Form>
                      <div style={{ marginBottom: '10px'}}>
            <Select title="Class Name" />
        </div>
         <div>
            <Input title="Course name" name="program" onChange={() => {}} type="text" />
        </div>
   
        
        <div className="create-program__btn">
        <Button theme="primary" size="sm">Create course</Button>
        </div>
        </Form>
        </Formik>
    </Modal>
  )
}

export default CreateCourse