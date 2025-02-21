import { useAppState } from "../../context/AppContext";
import FilterLayouts from "./Header";

const ShipmentLayout = () => {
  const { shipmentData } = useAppState();
  const { pageMin, pageMax } = useAppState();
  console.log(pageMin,pageMax)
  return (
    <div>
      <FilterLayouts />
      <div className="bg-white rounded-lg mb-8 overflow-x-auto scroll-bar">
        <table className="w-full">
          <thead className="text-left">
            <tr>
              <th className="p-2">S/N</th>
              <th className="p-6">Shipment ID</th>
              <th className="p-6">Date</th>
              <th className="p-6">Customer</th>
              <th className="p-6">Destination</th>
              <th className="p-6">Status</th>
            </tr>
          </thead>
          <tbody>
            {shipmentData.slice(pageMin, pageMax).map((item, idx) => {
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
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShipmentLayout;
