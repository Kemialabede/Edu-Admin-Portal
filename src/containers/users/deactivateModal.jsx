import Modal from '../../components/modal'

const DeactivateModal = ({ isShown, setIsShown }) => {
  return (
    <Modal isShown={isShown} setIsShown={setIsShown} title="Deactivate Staff">
        <div>
            <p>Are you sure you want to deactivate this staff?</p>

            <div className="delete_actions">
              <button>cancel</button>
              <button>deactivate</button>
            </div>
        </div>
    </Modal>
  )
}

export default DeactivateModal