import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '.'

describe('<Footer />', () => {
  it('Should render the footer component correctly', () => {
    render(<Footer />)

    const footer = screen.getByTestId('footer-test-id')

    expect(footer).toBeInTheDocument()
  })

  it('Shoul have my portfolio link', () => {
    render(<Footer />)

    const anchor = screen.getByText(/walison/i)

    expect(anchor).toHaveAttribute('href', 'https://www.walisontsx.com/')
  })

  it('Shoul have my portfolio link with another tab as target', () => {
    render(<Footer />)

    const anchor = screen.getByText(/walison/i)

    expect(anchor).toHaveAttribute('target', '__blank')
  })
})
