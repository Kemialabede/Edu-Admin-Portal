import DashboardLayout from '../../../components/layout';
import './permission.scss';
import { useFetchAllPermissions } from '../../../hooks/queries/useFetchAllPermissions';
import Button from '../../../components/button';
import { useUpdateAdminPermission } from '../../../hooks/mutation/useUpdateAdminPermission';
import { useParams } from 'react-router-dom';
import { usePermissionContext } from '../../../contexts/permissionContexts';
import PageLoader from '../../../components/loader/pageLoader';
import { useEffect } from 'react';

function groupByPermissionGroup(data) {
  const grouped = data.reduce((acc, item) => {
    const group = item.permission_group;
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(item);
    return acc;
  }, {});

  return Object.values(grouped);
}

const Permissions = () => {
  const params = useParams();
  const { selectedPermissions, setSelectedPermissions } =
    usePermissionContext();
  const { data, isFetching } = useFetchAllPermissions();
  const { mutate: updatePermission, isPending } = useUpdateAdminPermission({
    admin_uuid: params?.id,
    permissions: selectedPermissions,
  });

  useEffect(() => {
    const storedPermissions = sessionStorage.getItem('permissions');
    if (storedPermissions) {
      setSelectedPermissions(storedPermissions.split(','));
    }
  }, [setSelectedPermissions]);

  const handleCheckboxChange = (permissionName) => {
    setSelectedPermissions((prev) => {
      if (prev.includes(permissionName)) {
        return prev.filter((name) => name !== permissionName);
      } else {
        return [...prev, permissionName];
      }
    });
  };

  useEffect(() => {
    if (selectedPermissions !== 'all') {
      sessionStorage.setItem('permissions', selectedPermissions?.join(','));
    }
  }, [selectedPermissions]);

  const groupedPermissions = groupByPermissionGroup(data);
  return (
    <DashboardLayout>
      {isFetching ? (
        <PageLoader />
      ) : (
        <div className="form-container">
          <h2 className="form-title">Manage Permissions</h2>
          <>
            <table className="permissions-table">
              <thead>
                <tr>
                  <th>Module</th>
                  <th>Permissions</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(groupedPermissions).map((group) => (
                  <tr key={group}>
                    <td>
                      <label style={{ textTransform: 'capitalize' }}>
                        {groupedPermissions[group][0]?.permission_group}{' '}
                        Management
                      </label>
                    </td>
                    <td>
                      {groupedPermissions[group].map((permission) => (
                        <div
                          key={permission.name}
                          className="checkbox-container"
                        >
                          <input
                            type="checkbox"
                            checked={
                              selectedPermissions?.includes(permission.name) ||
                              selectedPermissions?.includes('all')
                            }
                            onChange={() =>
                              handleCheckboxChange(permission.name)
                            }
                          />
                          <label>{permission.display_name}</label>
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="save-permission">
              <Button
                theme="primary"
                onClick={() => updatePermission()}
                loading={isPending}
                disabled={selectedPermissions?.includes('all')}
              >
                Save Permission
              </Button>
            </div>
          </>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Permissions;
