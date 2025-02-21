import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { useEffect } from "react";
import axios from "axios";
import { useAppDispatch } from "./context/AppContext";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    axios
      .get("./data.json")
      .then((res) => {
        dispatch({ type: "GET_SHIPMENT_DATA", payload: res.data });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
