import React from "react";
import { render } from "@testing-library/react-native";
import ListEmpt from "../ListEmpt";

describe("ListEmpt Component", () => {
  it("renders correctly", () => {
    const element = render(<ListEmpt />);
    expect(element).toMatchSnapshot();

    expect(element.getByText("ToDos not found!")).toBeDefined();
  });
});
