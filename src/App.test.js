import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import { ContextProvider } from "./Context";

import CreateTodo from "./components/CreateTodo";
import Header from "./components/Header";
import Footer from "./components/Footer";

test("renders todo page title", () => {
  render(<Header />);
  const title = screen.getByText(/todo/i);
  expect(title).toBeInTheDocument();
});

test("renders todo theme switch button", () => {
  render(<Header />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("renders footer text", () => {
  render(
    <ContextProvider>
      <Footer />
    </ContextProvider>
  );
  const text = screen.getByText(/Drag and drop to reorder list./i);
  expect(text).toBeInTheDocument();
});

test("renders clear local storage button", () => {
  render(
    <ContextProvider>
      <Footer />
    </ContextProvider>
  );
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

/*
test("Click", () => {
  render(<Header />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
});
*/

const entries = [
  { text: "My Todo Item" },
  {
    text: "This is a longer todo item, that was created to test writing longer todo items, that are longer to test longer todo items, this sentence makes no sense.",
  },
  {
    text: "How about if you add some number like 78902, or a date like 12.07.2021 to you todo together with time 12.00",
  },
  { text: "Another test!" },
  { text: "One more !#$%&/()=/()=*ŠĐŽĆČL" },
];

describe("Input validate", () => {
  test.each(entries)("test with %s entry", async (entry) => {
    render(
      <ContextProvider>
        <CreateTodo />
      </ContextProvider>
    );

    const inputField = screen.queryByPlaceholderText(/Create a new todo.../i);

    fireEvent.change(inputField, { target: { value: entry.text } });
    fireEvent.blur(inputField);
  });
});
