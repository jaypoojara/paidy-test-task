import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "../index";

// Mock AsyncStorage methods
jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

describe("Home Component", () => {
  it("renders correctly", () => {
    const element = render(<Home />);
    expect(element).toMatchSnapshot();
  });

  it("renders correctly and adds a new todo", async () => {
    AsyncStorage.getItem.mockResolvedValue(JSON.stringify([]));
    AsyncStorage.setItem.mockResolvedValue(null);

    const { getByPlaceholderText, getByText } = render(<Home />);

    const inputElement = getByPlaceholderText("Enter here");
    expect(inputElement).toBeDefined();

    fireEvent.changeText(inputElement, "New Todo");
    const addButton = getByText("ADD");
    fireEvent.press(addButton);

    await waitFor(() => expect(AsyncStorage.setItem).toHaveBeenCalled());
  });
});
