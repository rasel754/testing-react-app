import { render ,screen } from "@testing-library/react";
import PrimaryButton from "../components/PrimaryButton.js";


describe("PrimaryButton", ()=> {
    test("renders with default text", () => {
        render(<PrimaryButton/>);
        expect(screen.getByRole("button", {name: /click to add/i})).toBeInTheDocument();
    });
    test("renders with custom text", () => {
        render(<PrimaryButton actionType="delete"/>);
        expect(screen.getByRole("button", {name: /click to delete/i})).toBeInTheDocument();
    });
})