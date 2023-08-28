import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import * as LocalAuthentication from "expo-local-authentication";
import Auth from "../index";

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(() => ({
    navigate: jest.fn(),
  })),
}));

// Mock the LocalAuthentication module methods
jest.mock("expo-local-authentication", () => ({
  getEnrolledLevelAsync: jest.fn(),
  authenticateAsync: jest.fn(),
}));

describe("Auth Component", () => {
  it("renders correctly", () => {
    const element = render(<Auth />);
    expect(element).toMatchSnapshot();
  });

  it("renders correctly with no enrolled level", async () => {
    LocalAuthentication.getEnrolledLevelAsync.mockResolvedValue(0);

    const { getByText } = render(<Auth />);

    const textElement = getByText("Set Authentication to Proceed");
    expect(textElement).toBeDefined();

    const goToSettingsButton = getByText("Go to Settings");
    expect(goToSettingsButton).toBeDefined();

    fireEvent.press(goToSettingsButton);
  });
});
