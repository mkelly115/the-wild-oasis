import styled from "styled-components";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>List of Activity Today</div>
      <div>Chart of Stay duration</div>
      <div>Chart of sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout