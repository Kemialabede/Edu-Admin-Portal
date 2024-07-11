import  { useRef, useState } from 'react';
import { Form, Formik } from "formik"
import Modal from "../../components/modal"
import Select from '../../components/select'
import { ImUpload2 } from 'react-icons/im';
import Input from '../../components/input';
import Button from '../../components/button';

const AddQuestionsModal = ({ isShown, setIsShown }) => {
    const [selectedQuestionType, setSelectedQuestionType] = useState("single-upload");
    const fileInputRef = useRef(null);

     const handleQuestionTypeChange = (e) => {
    setSelectedQuestionType(e.target.value);
  };


  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
     <Modal title="Create Questions" isShown={isShown} setIsShown={setIsShown}>
      <div className="radio-container">
        <div>
          <input type="radio" value="single-upload" onChange={handleQuestionTypeChange} name="contentOption" checked={selectedQuestionType === "single-upload"} />
          <p>Single Upload</p>
        </div>
        <div>
          <input type="radio" value="bulk-upload" onChange={handleQuestionTypeChange} name="contentOption" checked={selectedQuestionType === "bulk-upload"} />
          <p>Bulk Upload</p>
        </div>
      </div>
        <Formik>
        <Form>
        <div>
            <Select title="Course" name="program" onChange={() => {}} type="text" />
        </div>
        <br />
        {selectedQuestionType === "bulk-upload" && <div className="file-upload" onClick={handleDivClick}>
        <ImUpload2 />
        <span className="browse-text">Browse</span>
        <input
          type="file"
          id="fileInput"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={(e) => console.log(e.target.files[0])}
        />
      </div>}
       {selectedQuestionType === "single-upload" 
       && <div>
        <Formik>
          <Form>
            <div className='singleUpload__question'>
              <p>Question</p>
        <textarea style={{ width: '95%'}}></textarea>
        </div>
        <div className='singleUpload__options'>
          <Input title="Option 1" />
          <Input title="Option 2" />
          <Input title="Option 3" />
          <Input title="Option 4" />
          <Input title="Option 5" />
        </div>
        </Form>
        </Formik>
        </div>}
        <div className="create-program__btn">
        <Button theme="primary" size="sm">Create Question</Button>
        </div>
        </Form>
        </Formik>
    </Modal>
  )
}

export default AddQuestionsModal