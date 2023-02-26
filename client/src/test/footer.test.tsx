import { render, screen } from "@testing-library/react";
import  Footer  from "../components/footer";

test('renders e-mail', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Send e-mail/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders author', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/©/i);
  expect(linkElement).toBeInTheDocument();
});

