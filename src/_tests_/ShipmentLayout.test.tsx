import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useAppState } from "../context/AppContext";
import ShipmentLayout from "../components/dashboard/ShipmentLayout";

jest.mock("../context/AppContext", () => ({
  useAppState: jest.fn(),
}));

describe("ShipmentLayout", () => {
  xit("shows 'No Shipments Found' when there are no shipments", () => {
    (useAppState as jest.Mock).mockReturnValue({
      shipmentData: [],
      statusFilter: "Pending",
    });
    render(<ShipmentLayout />);
    expect(screen.getByText("No Shipments Found")).toBeInTheDocument();
  });
});