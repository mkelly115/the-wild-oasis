import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import { useRecentBookings } from "../features/dashboard/useRecentBooking";
import useRecentStays from "../features/dashboard/useRecentStays";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Spinner from "../ui/Spinner";

function Dashboard() {
  const { bookings, isLoadingBooking } = useRecentBookings();
  const { stays, confirmedStays, isLoading: isLoadingStay } = useRecentStays();

  if (isLoadingBooking || isLoadingStay) return <Spinner />;

  console.log(bookings);

  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
