import { render, screen } from '@testing-library/react'
import UserForm from './UserForm'



it("should render the component", () => {
    render(<UserForm />)

    const element = screen.getByRole('textbox', { name: 'Name' }) 
    const element2=screen.getByPlaceholderText('Type your Name')
    const element3=screen.getByText('get byt text test check')
    const element4=screen.getByLabelText('Name',{
        selector:'input'
    })
    const element5=screen.getByTitle('get by title this is the form')
    const element6=screen.getByTestId('paragraph')

    expect(element).toBeInTheDocument() 
    expect(element2).toBeInTheDocument()
    expect(element3).toBeInTheDocument()
    expect(element4).toBeInTheDocument()
    expect(element5).toBeInTheDocument()
    expect(element6).toBeInTheDocument()
})