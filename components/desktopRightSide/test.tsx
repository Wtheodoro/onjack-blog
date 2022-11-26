import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import DesktopRightSide from '.'

describe('<DesktopRightSide />', () => {
  it('Should render the Logo component correctly', () => {
    render(<DesktopRightSide />)

    const desktopRightSide = screen.getByTestId('desktopRightSide-test-id')

    expect(desktopRightSide).toBeInTheDocument()
  })
})
