import { useAppState } from "../../context/AppContext";
import FilterLayouts from "./Header";
import useShipments from "../../hooks/useShipments";

const ShipmentLayout = () => {
  useShipments();
  const { shipmentData, statusFilter, theme } = useAppState();
  const { pageMin, pageMax } = useAppState();
  const { loading } = useShipments();
  // console.log(pageMin,pageMax)
  const filteredShipments =
    statusFilter === "All"
      ? shipmentData
      : shipmentData.filter((shipment) => shipment.status === statusFilter);
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <FilterLayouts />
      <div
        className={`rounded-lg mb-8 overflow-x-auto scroll-bar ${
          theme == "dark" ? "bg-gray-200" : "bg-white"
        }`}
      >
        <table className="w-full">
          <thead className="text-left">
            <tr>
              <th className="p-2">ID</th>
              <th className="p-6">Tracking Number</th>
              <th className="p-6">Date</th>
              <th className="p-6">Customer</th>
              <th className="p-6">Destination</th>
              <th className="p-6">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredShipments.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center">
                  No Shipments Found
                </td>
              </tr>
            ) : (
              filteredShipments.slice(pageMin, pageMax).map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td className="p-2 text-gray-800">{item.id}</td>
                    <td className="p-6 text-[#0B63F8]">
                      #{item.tracking_number}
                    </td>
                    <td className="p-6 text-gray-800">{item.date}</td>
                    <td className="p-6 text-gray-800">{item.customer}</td>
                    <td className="p-6 text-gray-800">{item.destination}</td>
                    <td className="p-6 text-gray-800">{item.status}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShipmentLayout;
