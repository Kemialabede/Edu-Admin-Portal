import React from 'react';
import Modal from '../../components/modal';

const DeleteVideo = ({ isShown, setIsShown }) => {
  return (
    <Modal isShown={isShown} setIsShown={setIsShown} title="Delete Video">
      <div>
        <p>Are you sure you want to delete this video?</p>

        <div className="delete_actions">
          <button>cancel</button>
          <button>delete</button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteVideo;
