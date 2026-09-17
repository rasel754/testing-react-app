import { render, screen, within } from "@testing-library/react";
import UserTable from "./UserTable";
import { dummyUsers } from "./UserTable";

describe("UserTable", () => {
    it('should render data successfully after 1s', async () => {
        render(<UserTable users={dummyUsers} />)

        const dataLoadedMessage = await screen.findByTestId('loaded-msg', {}, { timeout: 2000 });

        expect(dataLoadedMessage).toBeInTheDocument();

        // screen.logTestingPlaygroundURL(
    })
    it('should render table correctily', () => {
        render(<UserTable users={dummyUsers} />)
        const rows = within(screen.getByTestId('users')).getAllByRole('row')

        expect(rows).toHaveLength(4)
    })
})