import Modal from '../../components/modal';
import { useDeleteClass } from '../../hooks/mutation/useDeleteClass';
import Button from '../../components/button';

const DeleteProgram = ({ isShown, setIsShown, currentId }) => {
  const { mutate: deleteClass, isPending } = useDeleteClass({
    setIsShown,
    currentId,
  });
  return (
    <Modal isShown={isShown} setIsShown={setIsShown} title="Delete Class">
      <div>
        <p>Are you sure you want to delete this class?</p>

        <div className="delete_actions">
          <button onClick={() => setIsShown(false)}>cancel</button>
          <Button onClick={deleteClass} loading={isPending}>
            delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteProgram;
