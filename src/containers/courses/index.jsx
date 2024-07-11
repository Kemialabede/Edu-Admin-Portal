import DashboardLayout from '../../components/layout'
import Table from '../../components/table'
import { data, headers } from '../../mocks/courses';
import './courses.scss';
import { useState } from 'react';
import UploadCourseMaterials from './uploadCourseMaterials';
import DeleteCourse from './deleteCourse';
import Button from '../../components/button';
import { IoIosAddCircleOutline } from 'react-icons/io';
import CreateCourse from './createCourse';
import Dropdown from '../../components/dropdown';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Menu } from 'evergreen-ui';
import EditCourse from './editCourse';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
    const [openModal, setOpenModal] = useState(null);
    const navigate = useNavigate();

      const handleOpenModal = (modalName) => {
    setOpenModal(modalName);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };


    
  return (
    <DashboardLayout pageTitle={true} content={<div className="create-button">
        <Button onClick={() => handleOpenModal('create')}><div className="create-button__inner"><IoIosAddCircleOutline /><p>Create Course</p></div></Button>
      </div>}>
      <Table tableData={data} tableHeaders={headers}>
        {(row) => (
          <>
            <td>{row.programName}</td>
            <td>{row.level}</td>
            <td>{row.dateCreated}</td>
            <td><button className='upload-button' onClick={() => handleOpenModal('upload')}>Upload Materials</button></td>
            <td><Dropdown icon={<BsThreeDotsVertical />}>
              <Menu.Item className='menu-item'>
                      <div onClick={() => handleOpenModal('edit')}>
                        <p>Edit</p>
                      </div>
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item className='menu-item'>
                      <div onClick={() => navigate('/courses/details')}>
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
      <UploadCourseMaterials isShown={openModal === 'upload'} setIsShown={() => setOpenModal(false)} />
      <DeleteCourse isShown={openModal === 'delete'} setIsShown={() => setOpenModal(false)} />
      <CreateCourse isShown={openModal === 'create'} setIsShown={() => setOpenModal(false)} />
      <EditCourse isShown={openModal === 'edit'} setIsShown={() => setOpenModal(false)} />
    </DashboardLayout>
  )
}

export default Courses