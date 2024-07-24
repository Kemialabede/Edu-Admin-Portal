import Button from '../../components/button';
import Modal from '../../components/modal';
import { useDeleteCourseMaterial } from '../../hooks/mutation/useDeleteCourseMaterials';

const DeleteCourse = ({ isShown, setIsShown, currentId }) => {
  const { mutate: deleteCourseMaterial, isPending } = useDeleteCourseMaterial({
    setIsShown,
    currentId,
  });

  console.log(currentId)

  return (
    <Modal
      isShown={isShown}
      setIsShown={setIsShown}
      title="Delete Course Material"
    >
      <div>
        <p>Are you sure you want to delete this course material?</p>

        <div className="delete_actions">
          <button onClick={() => setIsShown(false)}>cancel</button>
          <Button onClick={deleteCourseMaterial} loading={isPending}>delete</Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteCourse;
