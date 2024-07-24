import { useRef, useState } from 'react';
import Modal from '../../components/modal';
import { ImUpload2 } from 'react-icons/im';
import './questions.scss';
import Input from '../../components/input';
import { Form, Formik } from 'formik';

const UploadQuestions = ({ isShown, setIsShown }) => {
  const fileInputRef = useRef(null);
  const [selectedQuestionType, setSelectedQuestionType] =
    useState('single-upload');

  const handleQuestionTypeChange = (e) => {
    setSelectedQuestionType(e.target.value);
  };

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Modal
      isShown={isShown}
      width={700}
      setIsShown={setIsShown}
      buttonText={'Upload'}
      title="Upload Questions"
    >
      <div className="radio-container">
        <div>
          <input
            type="radio"
            value="single-upload"
            onChange={handleQuestionTypeChange}
            name="contentOption"
            checked={selectedQuestionType === 'single-upload'}
          />
          <p>Single Upload</p>
        </div>
        <div>
          <input
            type="radio"
            value="bulk-upload"
            onChange={handleQuestionTypeChange}
            name="contentOption"
            checked={selectedQuestionType === 'bulk-upload'}
          />
          <p>Bulk Upload</p>
        </div>
      </div>
      {selectedQuestionType === 'bulk-upload' && (
        <div className="file-upload" onClick={handleDivClick}>
          <ImUpload2 />
          <span className="browse-text">Browse</span>
          <input
            type="file"
            id="fileInput"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={(e) => console.log(e.target.files[0])}
          />
        </div>
      )}
      {selectedQuestionType === 'single-upload' && (
        <div>
          <Formik>
            <Form>
              <div className="singleUpload__question">
                <p>Question</p>
                <textarea></textarea>
              </div>
              <div className="singleUpload__options">
                <Input title="Option 1" />
                <Input title="Option 2" />
                <Input title="Option 3" />
                <Input title="Option 4" />
                <Input title="Option 5" />
              </div>
            </Form>
          </Formik>
        </div>
      )}
    </Modal>
  );
};

export default UploadQuestions;
