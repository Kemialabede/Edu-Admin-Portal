import React from 'react';
import Modal from '../../components/modal';
import { ImUpload2 } from 'react-icons/im';
import { Form, Formik } from 'formik';
import Input from '../../components/input';

const UploadCourseMaterials = ({ handleFileClick, isShown, setIsShown }) => {
  const fileInputRef = React.useRef(null);

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Modal
      isShown={isShown}
      setIsShown={setIsShown}
      buttonText={'Upload'}
      title="Upload Course Materials"
    >
      <Formik>
        <Form>
          <div>
            <Input
              title="Course title"
              name="program"
              onChange={() => {}}
              type="text"
              placeholder="Enter course title"
            />
          </div>
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
        </Form>
      </Formik>
    </Modal>
  );
};

export default UploadCourseMaterials;
