import Button from '../../components/button';
import Modal from '../../components/modal';
import { useDeactivateStaff } from '../../hooks/mutation/useDeactivateStaff';
import { useActivateStaff } from '../../hooks/mutation/useActivateStaff';

const DeactivateModal = ({ isShown, setIsShown, currentRow }) => {
  const { mutate: deactivateStaff, isPending } = useDeactivateStaff({
    setIsShown,
    currentRow,
  });

  return (
    <Modal
      isShown={isShown}
      setIsShown={setIsShown}
      title={`${currentRow?.status === 'Deactivated' ? 'Activate' : 'Deactivate'} Staff`}
    >
      <div>
        <p>
          Are you sure you want to{' '}
          {currentRow?.status === 'Deactivated' ? 'activate' : 'deactivate'}{' '}
          this staff?
        </p>

        <div className="delete_actions">
          <button onClick={() => setIsShown(false)}>cancel</button>
          <Button onClick={deactivateStaff} loading={isPending}>
            {currentRow?.status === 'Deactivated' ? 'activate' : 'deactivate'}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeactivateModal;
