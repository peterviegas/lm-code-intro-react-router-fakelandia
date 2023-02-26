import { render, screen } from "@testing-library/react";
import  Home  from "../components/home";

test('renders e-mail', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Welcome to the home of the Justice Department of Fakelandia./i);
  expect(linkElement).toBeInTheDocument();
});

