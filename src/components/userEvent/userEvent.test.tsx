import { render, screen } from "@testing-library/react"
import user from "@testing-library/user-event"
import UserEvent from "./UserEvent"

describe('UserEvent', () => {
    it('renders a counter with initial count of 0', () => {
        render(<UserEvent />)

        const countElement = screen.getByRole('heading', {
            level: 3
        }

        )
        expect(countElement).toBeInTheDocument()

    })



    it('should increse the love count upon the clicking on the button', async () => {
        user.setup()
        render(<UserEvent />)

        const increseBtn = screen.getByText('makes her love you mores')
        await user.click(increseBtn)

        const countElement = screen.getByRole('heading', {
            level: 3
        }

        )
        expect(countElement).toHaveTextContent('your girlfriend loves you 1 times')
    })
})