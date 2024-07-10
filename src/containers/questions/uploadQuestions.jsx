import React from 'react';
import Modal from '../../components/modal';
import { ImUpload2 } from "react-icons/im";

const UploadQuestions = ({  isShown, setIsShown }) => {
  const fileInputRef = React.useRef(null);

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Modal isShown={isShown} setIsShown={setIsShown} buttonText={'Upload'} title="Upload Questions">
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
    </Modal>
  );
};

export default UploadQuestions;
