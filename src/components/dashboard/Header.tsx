import ModeButton from "../../utils/ModeButton";
import { useAppDispatch, useAppState } from "../../context/AppContext";

const Header = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppState();

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStatus = e.target.value;
    dispatch({ type: "SET_STATUS_FILTER", payload2: selectedStatus });
  };
  return (
    <>
      <ModeButton />
      <div className="flex justify-between items-center my-6">
        <h1
          className={`text-2xl font-bold text-gray-800  ${
            theme == "dark" ? "text-white" : "text-black"
          }`}
        >
          Shipments
        </h1>
        <div>
          <select
            onChange={handleFilterChange}
            className="bg-white border border-[#C4C4C4] p-2 rounded-md outline-none"
          >
            <option disabled>Status</option>
            <option value="All">View All</option>
            <option value="In Progress">In Progress</option>
            <option value="Pending">Pending</option>
            <option value="Delivered">Delivered</option>
            <option value="Shipped">Shipped</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Header;
