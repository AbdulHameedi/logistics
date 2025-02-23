import { ArrowLeft, ArrowRight } from "../assets/svg";
import { useAppDispatch, useAppState } from "../context/AppContext";

const Pagination = () => {
  const dispatch = useAppDispatch();
  const { pageMin, pageMax, shipmentData, theme } = useAppState();
  return (
    <div className="flex items-center justify-center text-gray-800">
      <ArrowLeft
        onClick={() => dispatch({ type: "SET_PAGE_MIN" })}
        className={
          pageMin == 0 && theme == "light" ? "text-gray-500" : "text-gray-800"
        }
      />
      <ArrowRight
        onClick={() => dispatch({ type: "SET_PAGE_MAX" })}
        className={
          pageMax >= shipmentData.length && theme == "light"
            ? "text-gray-500"
            : "text-gray-800"
        }
      />
    </div>
  );
};

export default Pagination;
