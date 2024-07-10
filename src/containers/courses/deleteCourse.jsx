import Modal from '../../components/modal';

const DeleteCourse = ({ isShown, setIsShown }) => {
  return (
    <Modal isShown={isShown} setIsShown={setIsShown} title="Delete Course">
        <div>
            <p>Are you sure you want to delete this course?</p>

            <div className="delete_actions">
              <button>cancel</button>
              <button>delete</button>
            </div>
        </div>
    </Modal>
  )
}

export default DeleteCourse;