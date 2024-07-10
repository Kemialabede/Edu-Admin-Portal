import React from 'react'
import Modal from '../../components/modal'

const DeleteProgram = ({ isShown, setIsShown }) => {
  return (
    <Modal isShown={isShown} setIsShown={setIsShown} title="Delete Class">
        <div>
            <p>Are you sure you want to delete this class?</p>

            <div className="delete_actions">
              <button>cancel</button>
              <button>delete</button>
            </div>
        </div>
    </Modal>
  )
}

export default DeleteProgram