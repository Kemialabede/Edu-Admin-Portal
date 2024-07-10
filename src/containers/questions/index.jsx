import DashboardLayout from "../../components/layout"
import Table from "../../components/table";
import { data, headers } from "../../mocks/question";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdReadMore } from "react-icons/md";
import '../courses/courses.scss';
import { useState } from "react";
import UploadQuestions from "./uploadQuestions";
import DeleteQuestion from "./deleteQuestions";
import Dropdown from "../../components/dropdown";
import { Menu } from "evergreen-ui";
import { BsThreeDotsVertical } from "react-icons/bs";

const Questions = () => {
  const [openModal, setOpenModal] = useState(null);

        const handleOpenModal = (modalName) => {
    setOpenModal(modalName);
  };

  return (
    <DashboardLayout pageTitle={true}>
      <Table tableData={data} tableHeaders={headers}>
        {(row) => (
            <>
            <td>{row.programName}</td>
            <td>{row.dateCreated}</td>
            <td><button className='upload-button' onClick={() => handleOpenModal('upload')}>Upload Questions</button></td>
            <td><Dropdown icon={<BsThreeDotsVertical />}>
              <Menu.Item className='menu-item'>
                      <div onClick={() => handleOpenModal('view')}>
                        <p>View</p>
                      </div>
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item className='menu-item'>
                      <div onClick={() => handleOpenModal('delete')}>
                        <p>Delete</p>
                      </div>
                    </Menu.Item>
              </Dropdown></td>
          </>
        )}

      </Table>

      <UploadQuestions isShown={openModal === 'upload'} setIsShown={() => setOpenModal(false)} />
      <DeleteQuestion isShown={openModal === 'delete'} setIsShown={() => setOpenModal(false)} />
    </DashboardLayout>
  )
}

export default Questions