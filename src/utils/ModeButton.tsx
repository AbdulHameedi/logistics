import { Circle } from "../assets/svg";
import { useAppDispatch, useAppState } from "../context/AppContext";

const ModeButton = () => {
  const { theme } = useAppState();
  const dispatch = useAppDispatch();
  return (
    <div
      className={`w-10 h-4 border rounded-full absolute right-4 sm:right-10 top-4 text-gray-700 ${
        theme == "light" ? "border-black" : "border-white"
      }`}
      onClick={() => dispatch({ type: "TOGGLE_THEME" })}
    >
      <Circle
        className={`absolute transition-all duration-100 ${
          theme == "light" ? "left-0" : "right-0 text-gray-300"
        }`}
      />
    </div>
  );
};

export default ModeButton;
