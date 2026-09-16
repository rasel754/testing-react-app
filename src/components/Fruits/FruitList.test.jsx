import { render, screen } from "@testing-library/react"
import FruitList from "./FruitList"

describe('FruitList', () => {
    it('should renders the component', () => {
        render(<FruitList />)
        const element = screen.getByText('Fresh Fruits')
        //getAllByRole 
        const element2 = screen.getAllByRole("listitem")
        //getByText 
        const element3 = screen.getAllByRole('list')
        const button = screen.queryByRole("button", { name: "Select" })

        expect(element).toBeInTheDocument()
        expect(element2).toBeInTheDocument()
        expect(element3).toBeInTheDocument()
        expect(button).not.toBeInTheDocument()
    })
})