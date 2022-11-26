import { act, render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(setup);

test("initial count is zero", () => {
  const expectedText = /Count: 0/i;
  expectTextInTheDocument(expectedText);
});

test("the button increase +1 increases the count in 1", () => {
  const button = screen.getByRole("button", { name: "+1" });
  const expectedText = /Count: 1/i;

  act(() => {
    button.click();
  });

  expectTextInTheDocument(expectedText);
});

function expectTextInTheDocument(expectedText: RegExp) {
  const linkElement = screen.getByText(expectedText);
  expect(linkElement).toBeInTheDocument();
}

function setup() {
  render(<App />);
}
