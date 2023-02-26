import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import  Header  from "../components/header";

test("renders FAKELANDIA", () => {
render(
	<BrowserRouter>
	<Header />
	</BrowserRouter>
);
const titleElement = screen.getByText(/FAKELANDIA/i);
expect(titleElement).toBeInTheDocument();
});

test("renders JUSTICE", () => {
render(
	<BrowserRouter>
	<Header />
	</BrowserRouter>
);
const titleElement = screen.getByText(/JUSTICE/i);
expect(titleElement).toBeInTheDocument();
});

test("renders DEPARTMENT", () => {
render(
	<BrowserRouter>
	<Header />
	</BrowserRouter>
);
const titleElement = screen.getByText(/DEPARTMENT/i);
expect(titleElement).toBeInTheDocument();
});

test("renders Misdemeanours", () => {
render(
	<BrowserRouter>
	<Header />
	</BrowserRouter>
);
const titleElement = screen.getByText(/Misdemeanours/i);
expect(titleElement).toBeInTheDocument();
});

test("renders Confess To Us", () => {
render(
	<BrowserRouter>
	<Header />
	</BrowserRouter>
);
const titleElement = screen.getByText(/Confess To Us/i);
expect(titleElement).toBeInTheDocument();
});

test("renders About", () => {
render(
	<BrowserRouter>
	<Header />
	</BrowserRouter>
);
const titleElement = screen.getByText(/About/i);
expect(titleElement).toBeInTheDocument();
});
