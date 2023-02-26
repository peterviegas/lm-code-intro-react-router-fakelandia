import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import {Router} from "../router";

test("Router to Home", async () => {
render(
	<MemoryRouter initialEntries={["/confess"]}>
	<Router />
	</MemoryRouter>
);
await userEvent.click(screen.getByText("Home"));
expect(
	screen.getByText(
	"Welcome to the home of the Justice Department of Fakelandia."
	)
).toBeInTheDocument();
});

test("Router to Confess To Us", async () => {
	render(
		<MemoryRouter initialEntries={["/confess-to-us"]}>
		<Router />
		</MemoryRouter>
	);
	await userEvent.click(screen.getByText("Confess To Us"));
	expect(
		screen.getByText(
		"It´s very difficult to catch people commiting misdemeanours so we appreciate it when citizens confess to us directly."
		)
	).toBeInTheDocument();
});

test("Router About", async () => {
	render(
		<MemoryRouter initialEntries={["/about"]}>
		<Router />
		</MemoryRouter>
	);
	await userEvent.click(screen.getByText("About"));
	expect(
		screen.getByText(
		"Your job is to create a React app which meets their requirements."
		)
	).toBeInTheDocument();
});
