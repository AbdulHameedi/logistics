import ErrorBoundary from "../../routes/ErrorBoundary";
import Pagination from "../../utils/Pagination";
import { useAppState } from "../../context/AppContext";
import { Suspense, lazy } from "react";

const ShipmentLayout = lazy(() => import("./ShipmentLayout"));

const DashboardLayout = () => {
  const { theme } = useAppState();
  return (
    <div
      className={`p-10 relative ${
        theme == "dark" ? "bg-black" : "bg-[#F8F8F8]"
      }`}
    >
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <ErrorBoundary>
          <ShipmentLayout />
        </ErrorBoundary>
      </Suspense>

      <ErrorBoundary>
        <Pagination />
      </ErrorBoundary>
    </div>
  );
};

export default DashboardLayout;
