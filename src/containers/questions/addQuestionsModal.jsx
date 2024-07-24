import { useState } from 'react';
import Modal from '../../components/modal';
import SingleUpload from './singleUpload';
import BulkUpload from './bulkUpload';

const AddQuestionsModal = ({ isShown, setIsShown, courses }) => {
  const [selectedQuestionType, setSelectedQuestionType] =
    useState('single-upload');

  const handleQuestionTypeChange = (e) => {
    setSelectedQuestionType(e.target.value);
  };

  return (
    <Modal
      title="Create Questions"
      isShown={isShown}
      setIsShown={setIsShown}
      width={800}
    >
      <div className="create_question">
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
          <BulkUpload courses={courses?.data} setIsShown={setIsShown} />
        )}
        {selectedQuestionType === 'single-upload' && (
          <SingleUpload courses={courses?.data} setIsShown={setIsShown} />
        )}
      </div>
    </Modal>
  );
};

export default AddQuestionsModal;
