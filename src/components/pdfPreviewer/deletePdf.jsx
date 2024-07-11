import React from 'react';
import Modal from '../../components/modal';

const DeletePdf = ({ isShown, setIsShown }) => {
  return (
    <Modal isShown={isShown} setIsShown={setIsShown} title="Delete Pdf">
        <div>
            <p>Are you sure you want to delete this pdf?</p>

            <div className="delete_actions">
              <button>cancel</button>
              <button>delete</button>
            </div>
        </div>
    </Modal>
  )
}

export default DeletePdf