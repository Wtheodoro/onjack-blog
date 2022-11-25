import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Logo from '.'

describe('<Logo />', () => {
  it('Should render the Logo component correctly', () => {
    render(<Logo />)

    const logo = screen.getByTestId('header-test-id')

    expect(logo).toBeInTheDocument()
  })
})
