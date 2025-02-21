import ModeButton from "../../utils/ModeButton";

const Header = () => {
  return (
    <>
      <ModeButton />
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Shipments</h1>
        <div>
          <select className="bg-white border border-[#C4C4C4] p-2 rounded-md">
            <option disabled>Status</option>
            <option value="InProgress">In Progress</option>
            <option value="Pending">Pending</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Header;
