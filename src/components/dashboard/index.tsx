import ErrorBoundary from "../../routes/ErrorBoundary";
import Pagination from "../../utils/Pagination";
import ShipmentLayout from "./ShipmentLayout";
import { useAppState } from "../../context/AppContext";

const DashboardLayout = () => {
  const {theme} = useAppState();
  return (
    <div className={`bg-[#F8F8F8]  p-10 relative ${theme == "dark" ? "bg-black" : "bg-[#F8F8F8]"}`}>
      
      <ErrorBoundary>
        <ShipmentLayout />
      </ErrorBoundary>

      <ErrorBoundary>
        <Pagination />
      </ErrorBoundary>
    </div>
  );
};

export default DashboardLayout;
