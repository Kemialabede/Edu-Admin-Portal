import DashboardLayout from '../../components/layout';
import Table from '../../components/table';
import { courseMaterialHeaders } from '../../mocks/courses';
import { useEffect, useState } from 'react';
import UploadCourseMaterials from './uploadCourseMaterials';
import DeleteCourse from './deleteCourseMaterial';
import Button from '../../components/button';
import { IoIosAddCircleOutline } from 'react-icons/io';
import CreateCourse from './createCourseMaterial';
import Dropdown from '../../components/dropdown';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Menu } from 'evergreen-ui';
import EditCourse from './editCourseMaterial';
import Search from '../../components/search';
import { useFetchCourseMaterials } from '../../hooks/queries/useFetchCourseMaterials';
import { useDebounce } from 'use-debounce';
import getTotalPages from '../../utilities/getTotalPages';
import { useUserContext } from '../../contexts/userContexts';

const CourseMaterials = () => {
  const [openModal, setOpenModal] = useState(null);
  const [currentRow, setCurrentRow] = useState();
  const [searchValue, setSearchValue] = useState('');
  const [value] = useDebounce(searchValue, 1000);
  const [page, setPage] = useState(1);

  const { data, isFetching, refetch } = useFetchCourseMaterials({
    query: {
      search: value,
      page: page,
    },
  });

  useEffect(() => {
    refetch();
  }, [value, page]);

  const handleOpenModal = (modalName) => {
    setOpenModal(modalName);
  };

  const handleSearch = (e) => {
    setSearchValue(e?.target?.value);
  };

  const { userData } = useUserContext();
  const permissions = userData?.admin?.permissions;

  return (
    <DashboardLayout
      pageTitle={true}
      content={
        <>
          {(permissions?.includes('create_material') ||
            permissions === 'all') && (
            <div className="create-button">
              <Button onClick={() => handleOpenModal('create')}>
                <div className="create-button__inner">
                  <IoIosAddCircleOutline />
                  <p>Create Course Material</p>
                </div>
              </Button>
            </div>
          )}
        </>
      }
    >
      <Search onChange={handleSearch} />
      <br />
      <Table
        tableData={data?.data}
        tableHeaders={courseMaterialHeaders}
        isLoading={isFetching}
        currentPage={page}
        forcePage={page - 1}
        totalPage={getTotalPages(Number(data?.meta?.total), 15)}
        changeCurrentPage={(num) => setPage(num?.selected + 1)}
        handlePageInput={(e) => setPage(e)}
      >
        {(row) => (
          <>
            <td>{row.material_name}</td>
            <td>{row.course_name}</td>
            <td>{row.created_at}</td>
            <td>
              <Dropdown icon={<BsThreeDotsVertical />}>
                {(permissions?.includes('edit_material') ||
                  permissions === 'all') && (
                  <Menu.Item className="menu-item">
                    <div
                      onClick={() => {
                        handleOpenModal('edit');
                        setCurrentRow(row);
                      }}
                    >
                      <p>Edit</p>
                    </div>
                  </Menu.Item>
                )}
                <Menu.Divider />
                {(permissions?.includes('delete_material') ||
                  permissions === 'all') && (
                  <Menu.Item className="menu-item">
                    <div
                      onClick={() => {
                        handleOpenModal('delete');
                        setCurrentRow(row);
                      }}
                    >
                      <p>Delete</p>
                    </div>
                  </Menu.Item>
                )}
              </Dropdown>
            </td>
          </>
        )}
      </Table>
      <UploadCourseMaterials
        isShown={openModal === 'upload'}
        setIsShown={() => setOpenModal(false)}
      />
      <DeleteCourse
        isShown={openModal === 'delete'}
        setIsShown={() => setOpenModal(false)}
        currentId={currentRow?.uuid}
      />
      <CreateCourse
        isShown={openModal === 'create'}
        setIsShown={() => setOpenModal(false)}
      />
      <EditCourse
        isShown={openModal === 'edit'}
        setIsShown={() => setOpenModal(false)}
        currentRow={currentRow}
      />
    </DashboardLayout>
  );
};

export default CourseMaterials;
