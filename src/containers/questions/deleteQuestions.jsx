import Modal from '../../components/modal';

const DeleteQuestion = ({ isShown, setIsShown }) => {
  return (
    <Modal isShown={isShown} setIsShown={setIsShown} title="Delete Questions">
      <div>
        <p>Are you sure you want to delete these questions?</p>

        <div className="delete_actions">
          <button>cancel</button>
          <button>delete</button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteQuestion;
