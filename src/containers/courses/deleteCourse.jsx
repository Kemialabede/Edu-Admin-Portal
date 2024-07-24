import Modal from '../../components/modal';
import { useDeleteCourse } from '../../hooks/mutation/useDeleteCourse';
import Button from '../../components/button';

const DeleteCourse = ({ isShown, setIsShown, currentId }) => {
  const { mutate: deleteCourse, isPending } = useDeleteCourse({
    setIsShown,
    currentId,
  });

  return (
    <Modal isShown={isShown} setIsShown={setIsShown} title="Delete Course">
      <div>
        <p>Are you sure you want to delete this course?</p>

        <div className="delete_actions">
          <button onClick={() => setIsShown(false)}>cancel</button>
          <Button onClick={deleteCourse} loading={isPending}>
            delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteCourse;
