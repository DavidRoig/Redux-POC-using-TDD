import { act, render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(setup);

test("initial count is zero", () => {
  const expectedText = /Count: 0/i;
  expectTextInTheDocument(expectedText);
});

test("the button increase +1 increases the count in 1", () => {
  const button = screen.getByRole("button", { name: "+1" });

  act(() => {
    button.click();
  });

  const linkElement = screen.getByText(/Count: 1/i);
  expect(linkElement).toBeInTheDocument();
});

function expectTextInTheDocument(expectedText: RegExp) {
  const linkElement = screen.getByText(expectedText);
  expect(linkElement).toBeInTheDocument();
}

function setup() {
  render(<App />);
}
