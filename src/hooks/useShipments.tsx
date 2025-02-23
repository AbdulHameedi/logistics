import { useEffect, useState } from "react";
import axios from "axios";
import { useAppDispatch } from "../context/AppContext";

export const useShipments = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("./data.json")
      .then((res) => {
        dispatch({ type: "GET_SHIPMENT_DATA", payload: res.data });
        // console.log(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [dispatch]);
  return { loading };
};
export default useShipments;
