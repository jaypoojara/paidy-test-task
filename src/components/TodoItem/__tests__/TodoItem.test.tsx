import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import TodoItem from "../index";

describe("TodoItem Component", () => {
  const mockOnPressTodo = jest.fn();
  const mockOnPressRemove = jest.fn();
  const title = "Test Todo";
  const index = 1;

  it("renders correctly", () => {
    const element = render(
      <TodoItem
        onPressTodo={mockOnPressTodo}
        onPressRemove={mockOnPressRemove}
        title={title}
        index={index}
      />
    );
    expect(element).toMatchSnapshot();
  });

  it("renders correctly with the provided props", () => {
    const { getByText, getByTestId } = render(
      <TodoItem
        onPressTodo={mockOnPressTodo}
        onPressRemove={mockOnPressRemove}
        title={title}
        index={index}
      />
    );

    const todoContainer = getByTestId("todoItemTestID");
    const todoTitle = getByText(title);

    expect(todoContainer).toBeDefined();
    expect(todoTitle).toBeDefined();

    fireEvent.press(todoContainer);
    expect(mockOnPressTodo).toHaveBeenCalledWith(index);

    const removeButton = getByText("REMOVE");
    fireEvent.press(removeButton);
    expect(mockOnPressRemove).toHaveBeenCalledWith(index);
  });
});
