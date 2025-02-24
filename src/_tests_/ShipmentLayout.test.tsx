import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ShipmentLayout from "../components/dashboard/ShipmentLayout";

describe("ShipmentLayout", () => {
  it("renders ShipmentLayout component", () => {
    render(<ShipmentLayout />);
  });
});
