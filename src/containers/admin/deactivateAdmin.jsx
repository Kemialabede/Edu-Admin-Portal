import Button from '../../components/button';
import Modal from '../../components/modal';
import { useDeactivateAdmin } from '../../hooks/mutation/useDeactivateAdmin';

const DeactivateAdmin = ({ isShown, setIsShown, currentRow }) => {
  const { mutate: deactivateAdmin, isPending } = useDeactivateAdmin({
    setIsShown,
    currentRow,
  });

  return (
    <Modal
      isShown={isShown}
      setIsShown={setIsShown}
      title={`${currentRow?.status === 'inactive' ? 'Activate' : 'Deactivate'} Admin`}
    >
      <div>
        <p>
          Are you sure you want to{' '}
          {currentRow?.status === 'inactive' ? 'activate' : 'deactivate'} this
          admin?
        </p>

        <div className="delete_actions">
          <button onClick={() => setIsShown(false)}>cancel</button>
          <Button onClick={deactivateAdmin} loading={isPending}>
            {currentRow?.status === 'inactive' ? 'activate' : 'deactivate'}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeactivateAdmin;
