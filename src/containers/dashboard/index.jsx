import DashboardLayout from "../../components/layout"
import AggregateCount from "./aggregateCount"
import TopScorers from "./topScorers"

const Dashboard = () => {
  return (
    <DashboardLayout pageTitle={true}>
      <AggregateCount />
      <TopScorers />
    </DashboardLayout>
  )
}

export default Dashboard