import Modal from "../../components/modal"

const DeleteLevel = ({ isShown, setIsShown }) => {
  return (
   <Modal isShown={isShown} setIsShown={setIsShown} title="Delete Level">
        <div>
            <p>Are you sure you want to delete this level?</p>

            <div className="delete_actions">
              <button>cancel</button>
              <button>delete</button>
            </div>
        </div>
    </Modal>
  )
}

export default DeleteLevel