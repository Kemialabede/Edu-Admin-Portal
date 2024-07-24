import DashboardLayout from '../../components/layout';
import { useFetchDashboardMetrics } from '../../hooks/queries/useFetchDashboardMetrics';
import AggregateCount from './aggregateCount';
import TopScorers from './topScorers';

const Dashboard = () => {
  const { data } = useFetchDashboardMetrics({});

  return (
    <DashboardLayout pageTitle={true}>
      <AggregateCount data={data} />
      <TopScorers />
    </DashboardLayout>
  );
};

export default Dashboard;
