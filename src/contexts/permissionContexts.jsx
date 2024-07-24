import { useState, createContext, useMemo, useContext } from 'react';
export const PermissionContext = createContext({});

export const PermissionContextProvider = ({ children }) => {
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  return (
    <PermissionContext.Provider
      value={useMemo(
        () => ({
          selectedPermissions,
          setSelectedPermissions,
        }),
        [selectedPermissions],
      )}
    >
      {children}
    </PermissionContext.Provider>
  );
};

export const usePermissionContext = () => useContext(PermissionContext);
