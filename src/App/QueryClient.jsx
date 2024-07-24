import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const ReactQueryProvider = ({ children }) => {
  const persister = createSyncStoragePersister({
    storage: window.localStorage,
  });
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      {children}
      <ReactQueryDevtools />
    </PersistQueryClientProvider>
  );
};
export default ReactQueryProvider;
