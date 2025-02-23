import ErrorBoundary from "../../routes/ErrorBoundary";
import { useAppState } from "../../context/AppContext";
import { Suspense, lazy } from "react";

const ShipmentLayout = lazy(() => import("./ShipmentLayout"));

const DashboardLayout = () => {
  const { theme } = useAppState();
  return (
    <div
      className={`p-4 sm:p-10 relative h-screen overflow-y-auto ${
        theme == "dark" ? "bg-black" : "bg-[#F8F8F8]"
      }`}
    >
      <Suspense>
        <ErrorBoundary>
          <ShipmentLayout />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
