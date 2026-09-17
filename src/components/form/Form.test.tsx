import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Form from './Form';

describe('Form Component', () => {
  it('submit the  form correctly with user input text', async () => {
    user.setup()
    render(<Form />)
    const text ='Hello World'

    const input = screen.getByRole('textbox')
    await user.type(input, text)

    const heading = screen.getByRole('heading', { level: 2 })

    expect(heading).toHaveTextContent(text) 
  })
})
