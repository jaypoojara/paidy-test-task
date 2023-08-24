import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Button from "../Button";

describe("Button Component", () => {
  const mockOnPress = jest.fn();
  const title = "Button Title";
  const radius = 50;

  it("renders correctly", () => {
    const element = render(<Button title="Button Title" />);
    expect(element).toMatchSnapshot();
  });

  it("renders correctly with the provided props", () => {
    const { getByText, getByTestId } = render(
      <Button onPress={mockOnPress} title={title} radius={radius} />
    );

    const button = getByTestId("buttonTestID");
    const buttonText = getByText(title);

    expect(button).toBeDefined();
    expect(buttonText).toBeDefined();

    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalled();
  });
});
