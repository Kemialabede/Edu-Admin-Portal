import Dropdown from '../../components/dropdown';
import DashboardLayout from '../../components/layout';
import Table from '../../components/table';
import { headers } from '../../mocks/users';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Menu } from 'evergreen-ui';
import DeactivateModal from './deactivateModal';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../../components/search';
import { useFetchStaff } from '../../hooks/queries/useFetchStaff';
import { useFetchStaffSearch } from '../../hooks/queries/useFetchStaffSearch';
import { useDebounce } from 'use-debounce';
import getTotalPages from '../../utilities/getTotalPages';
import { useUserContext } from '../../contexts/userContexts';

const Users = () => {
  const [openModal, setOpenModal] = useState(null);
  const navigate = useNavigate();
  const [currentRow, setCurrentRow] = useState({});
  const [searchValue, setSearchValue] = useState('');
  const [value] = useDebounce(searchValue, 1000);
  const [page, setPage] = useState(1);

  const { userData } = useUserContext();
  const permissions = userData?.admin?.permissions;

  const { data, isFetching, refetch } = useFetchStaff({
    query: {
      page: page,
    },
  });

  const {
    data: searchData,
    isFetching: isSearchFetching,
    refetch: searchRefetch,
  } = useFetchStaffSearch({
    query: {
      q: value,
      page: page,
    },
  });

  const handleOpenModal = (modalName) => {
    setOpenModal(modalName);
  };

  const handleSearch = (e) => {
    setSearchValue(e?.target?.value);
  };

  useEffect(() => {
    if (value) {
      searchRefetch();
    } else {
      refetch();
    }
  }, [value, page]);

  return (
    <DashboardLayout
      pageTitle={true}
      content={
        <div>
          <Search onChange={handleSearch} />
        </div>
      }
    >
      <Table
        tableData={value ? searchData?.data : data?.data}
        tableHeaders={headers}
        currentPage={page}
        forcePage={page - 1}
        totalPage={getTotalPages(
          Number(value ? searchData?.meta?.total : data?.meta?.total),
          15,
        )}
        changeCurrentPage={(num) => setPage(num?.selected + 1)}
        handlePageInput={(e) => setPage(e)}
        isLoading={isFetching || isSearchFetching}
      >
        {(row) => (
          <>
            <td>{row.first_name}</td>
            <td>{row.last_name}</td>
            <td>{row.email}</td>
            <td>{row.school_name}</td>
            <td>{row.phone || '-'}</td>
            <td>{row.address || '-'}</td>
            <td>
              <Dropdown icon={<BsThreeDotsVertical />}>
                {(permissions?.includes('deactivate_staff') ||
                  permissions === 'all') && (
                  <Menu.Item className="menu-item">
                    <div
                      onClick={() => {
                        handleOpenModal('status');
                        setCurrentRow(row);
                      }}
                    >
                      {row?.status === 'Deactivated' ? (
                        <p>Activate</p>
                      ) : (
                        <p>Deactivate</p>
                      )}
                    </div>
                  </Menu.Item>
                )}
                <Menu.Divider />
                <Menu.Item className="menu-item">
                  <div onClick={() => navigate(`/users/details/${row.uuid}`)}>
                    <p>View</p>
                  </div>
                </Menu.Item>
              </Dropdown>
            </td>
          </>
        )}
      </Table>
      <DeactivateModal
        isShown={openModal === 'status'}
        setIsShown={() => setOpenModal(false)}
        currentRow={currentRow}
      />
    </DashboardLayout>
  );
};

export default Users;
