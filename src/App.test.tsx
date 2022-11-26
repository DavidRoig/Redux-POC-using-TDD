import { act, render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(setup);

test("initial count is zero", () => {
  const expectedText = /Count: 0/i;
  expectTextInTheDocument(expectedText);
});

test("the button increase +1 increases the count in 1", () => {
  clickButton("+1");

  expectTextInTheDocument(/Count: 1/i);
});

test("the counter increases every time button is clicked", () => {
  for (let i = 0; i < 3; i++) {
    clickButton("+1");
  }

  expectTextInTheDocument(/Count: 3/i);
});

function clickButton(name: string) {
  const button = screen.getByRole("button", { name });
  act(() => {
    button.click();
  });
}

function expectTextInTheDocument(expectedText: RegExp) {
  const linkElement = screen.getByText(expectedText);
  expect(linkElement).toBeInTheDocument();
}

function setup() {
  render(<App />);
}
