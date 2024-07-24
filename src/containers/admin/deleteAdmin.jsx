import Modal from '../../components/modal';
import { useDeleteAdmin } from '../../hooks/mutation/useDeleteAdmin';
import Button from '../../components/button';

const DeleteAdmin = ({ isShown, setIsShown, currentId }) => {
  const { mutate: deleteAdmin, isPending } = useDeleteAdmin({
    setIsShown,
    currentId,
  });
  return (
    <Modal isShown={isShown} setIsShown={setIsShown} title="Deactivate Admin">
      <div>
        <p>Are you sure you want to delete this admin?</p>

        <div className="delete_actions">
          <button onClick={() => setIsShown(false)}>cancel</button>
          <Button onClick={deleteAdmin} loading={isPending}>
            delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteAdmin;
