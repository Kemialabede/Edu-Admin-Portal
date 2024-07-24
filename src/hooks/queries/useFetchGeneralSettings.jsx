import { useQuery } from '@tanstack/react-query';
import { GENERAL_SETTING } from '../../apiQueries/queryTypes';
import { viewGeneralSetting } from '../../apiQueries/setting';

export const useFetchGeneralSettings = () => {
  return useQuery({
    queryKey: GENERAL_SETTING,
    queryFn: async () => {
      const data = await viewGeneralSetting();
      return data?.data?.data;
    },
    initialData: [],
  });
};
