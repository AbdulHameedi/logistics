import {
  createContext,
  ReactNode,
  useReducer,
  useContext,
  useEffect,
} from "react";
import { ShipmentsProp } from "../utils/entities";
interface State {
  shipmentData: ShipmentsProp[];
  pageMin: number;
  pageMax: number;
  theme: string;
  statusFilter: string
}
interface Action {
  type: string;
  payload?: ShipmentsProp[] | null;
  payload2?: string
}
type Dispatch = (action: Action) => void;
interface AppProviderProps {
  children: ReactNode;
}
const initialState = {
  shipmentData: [],
  pageMin: 0,
  pageMax: 10,
  theme: (localStorage.getItem("theme") as "light" | "dark") || "light",
  statusFilter: "All"
};
const AppStateContext = createContext<State | undefined>(undefined);
const AppDispathContext = createContext<Dispatch | undefined>(undefined);
const DashboardReducer = (state: State, action: Action) => {
  const { type, payload,payload2 } = action;
  switch (type) {
    case "GET_SHIPMENT_DATA":
      return {
        ...state,
        shipmentData: payload ? (payload as ShipmentsProp[]) : [],
      };
    case "SET_PAGE_MIN":
      return {
        ...state,
        pageMin: state.pageMin > 0 ? state.pageMin - 10 : state.pageMin,
        pageMax: state.pageMax > 10 ? state.pageMax - 10 : state.pageMax,
      };
    case "SET_PAGE_MAX":
      return {
        ...state,
        pageMax:
          state.pageMax < state.shipmentData.length
            ? state.pageMax + 10
            : state.pageMax,
        pageMin:
          state.pageMax < state.shipmentData.length
            ? state.pageMin + 10
            : state.pageMin,
      };
    case "TOGGLE_THEME": {
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return { ...state, theme: newTheme };
    }
    case "SET_STATUS_FILTER":
      return{
        ...state,
        statusFilter: payload2 as string,
      }
    default:
      return state;
  }
};
export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(DashboardReducer, initialState);
  useEffect(() => {
    // Ensure that the theme persists on refresh
    if (state.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [state.theme]);
  return (
    <AppStateContext.Provider value={state}>
      <AppDispathContext.Provider value={dispatch}>
        {children}
      </AppDispathContext.Provider>
    </AppStateContext.Provider>
  );
};
export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context)
    throw new Error("useAppState must be used within a AppProvider");
  return context;
};
export const useAppDispatch = () => {
  const context = useContext(AppDispathContext);
  if (!context)
    throw new Error("useAppDispatch must be used within a AppProvider");
  return context;
};
