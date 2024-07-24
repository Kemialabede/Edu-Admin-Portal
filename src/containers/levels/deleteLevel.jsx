import Modal from '../../components/modal';
import { useDeleteLevel } from '../../hooks/mutation/useDeleteLevel';
import Button from '../../components/button';

const DeleteLevel = ({ isShown, setIsShown, currentId }) => {
  const { mutate: deleteLevel, isPending } = useDeleteLevel({
    setIsShown,
    currentId,
  });
  return (
    <Modal isShown={isShown} setIsShown={setIsShown} title="Delete Level">
      <div>
        <p>Are you sure you want to delete this level?</p>

        <div className="delete_actions">
          <button onClick={() => setIsShown(false)}>cancel</button>
          <Button onClick={deleteLevel} loading={isPending}>
            delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteLevel;
