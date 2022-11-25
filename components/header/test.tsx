import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '.'

describe('<Header />', () => {
  it('Should render the Header component correctly', () => {
    render(<Header />)

    const header = screen.getByTestId('header-test-id')

    expect(header).toBeInTheDocument()
  })
})
