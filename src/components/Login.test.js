import { render, screen, fireEvent } from "@testing-library/react";



import Login from "./Loginpage.js";



const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));


test("renders Login page", () => {
  render(<Login />);
    // screen.debug();
  const email = screen.getByPlaceholderText("please enter your email");
  expect(email).toBeInTheDocument(); // jest
});

// 2

test("should accept email value", () => {
  render(<Login />);
  const element = screen.getByPlaceholderText("please enter your email");
  fireEvent.change(element, { target: { value: "test@gmail.com" } });
  screen.debug();
  expect(element.value).toBe("test@gmail.com");
});
//3

test("should accept email value", () => {
    render(<Login />);
    const element = screen.getByPlaceholderText("please enter your ");
    fireEvent.change(element, { target: { value: "test@gmail.com" } });
    screen.debug();
    expect(element.value).toBe("test@gmail.com");
  });
// 4


test("should accept email value", () => {
    render(<Login />);
    const element = screen.getByPlaceholderText("password here");
    fireEvent.change(element, { target: { value: "test@gmail.com" } });
    screen.debug();
    expect(element.value).toBe("test@gmail.com");
  });
 

//5
test("should accept email value", () => {
    render(<Login />);
    const element = screen.getByPlaceholderText("password ");
    fireEvent.change(element, { target: { value: "test@gmail.com" } });
    screen.debug();
    expect(element.value).toBe("test@gmail.com");
  });
 