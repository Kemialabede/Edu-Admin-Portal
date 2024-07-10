import Modal from '../../components/modal';

const DeactivateAdmin = ({ isShown, setIsShown }) => {
  return (
    <Modal isShown={isShown} setIsShown={setIsShown} title="Deactivate Admin">
        <div>
            <p>Are you sure you want to deactivate this admin?</p>

            <div className="delete_actions">
              <button>cancel</button>
              <button>deactivate</button>
            </div>
        </div>
    </Modal>
  )
}

export default DeactivateAdmin;