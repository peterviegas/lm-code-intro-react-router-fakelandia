import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import {Router} from './router';


test("renders Confess To Us", () => {
render(
  <BrowserRouter>
  <Router />
  </BrowserRouter>
);
const titleElement = screen.getByText(/Confess To Us/i);
expect(titleElement).toBeInTheDocument();
});

test("renders About", () => {
render(
  <BrowserRouter>
  <Router />
  </BrowserRouter>
);
const titleElement = screen.getByText(/About/i);
expect(titleElement).toBeInTheDocument();
});

