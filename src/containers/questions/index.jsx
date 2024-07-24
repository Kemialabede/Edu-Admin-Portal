import DashboardLayout from '../../components/layout';
import Table from '../../components/table';
import { headers } from '../../mocks/question';
import '../courses/courses.scss';
import { useEffect, useState } from 'react';
import UploadQuestions from './uploadQuestions';
import Dropdown from '../../components/dropdown';
import { Menu } from 'evergreen-ui';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Button from '../../components/button';
import { IoIosAddCircleOutline } from 'react-icons/io';
import AddQuestionsModal from './addQuestionsModal';
import Search from '../../components/search';
import { useFetchCourses } from '../../hooks/queries/useFetchCourses';
import { useNavigate } from 'react-router-dom';
import UpdateSettingModal from './updateQuestionSetting';
import getTotalPages from '../../utilities/getTotalPages';
import { useDebounce } from 'use-debounce';
import { useUserContext } from '../../contexts/userContexts';

const Questions = () => {
  const [openModal, setOpenModal] = useState(null);
  const [currentRow, setCurrentRow] = useState({});
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [value] = useDebounce(searchValue, 1000);
  const [page, setPage] = useState(1);

  const {
    data: courses,
    isFetching,
    refetch,
  } = useFetchCourses({
    query: {
      page: page,
      search: value,
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
          {(permissions?.includes('create_question') ||
            permissions === 'all') && (
            <div className="create-button">
              <Button onClick={() => handleOpenModal('create')}>
                <div className="create-button__inner">
                  <IoIosAddCircleOutline />
                  <p>Add Questions</p>
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
        tableData={courses?.data}
        tableHeaders={headers}
        isLoading={isFetching}
        currentPage={page}
        forcePage={page - 1}
        totalPage={getTotalPages(Number(courses?.meta?.total), 15)}
        changeCurrentPage={(num) => setPage(num?.selected + 1)}
        handlePageInput={(e) => setPage(e)}
      >
        {(row) => (
          <>
            <td>{row.name}</td>
            <td>{row.created_at}</td>
            {/* <td>
              <button
                className="upload-button"
                onClick={() => handleOpenModal('upload')}
              >
                Upload Questions
              </button>
            </td> */}
            <td>
              <Dropdown icon={<BsThreeDotsVertical />}>
                <Menu.Item className="menu-item">
                  <div
                    onClick={() =>
                      navigate(
                        `/questions-management/view/${row.uuid}/${row.name}`,
                      )
                    }
                  >
                    <p>View</p>
                  </div>
                </Menu.Item>
                <Menu.Divider />
                {(permissions?.includes('update_settings') ||
                  permissions === 'all') && (
                  <Menu.Item className="menu-item">
                    <div
                      onClick={() => {
                        handleOpenModal('setting');
                        setCurrentRow(row);
                      }}
                    >
                      <p>Test Setting</p>
                    </div>
                  </Menu.Item>
                )}
                <Menu.Divider />
                {/* <Menu.Item className="menu-item">
                  <div onClick={() => handleOpenModal('delete')}>
                    <p>Delete</p>
                  </div>
                </Menu.Item> */}
              </Dropdown>
            </td>
          </>
        )}
      </Table>

      <UploadQuestions
        isShown={openModal === 'upload'}
        setIsShown={() => setOpenModal(false)}
      />
      <AddQuestionsModal
        isShown={openModal === 'create'}
        setIsShown={() => setOpenModal(false)}
        courses={courses}
      />
      <UpdateSettingModal
        isShown={openModal === 'setting'}
        setIsShown={() => setOpenModal(false)}
        currentRow={currentRow}
      />
    </DashboardLayout>
  );
};

export default Questions;
