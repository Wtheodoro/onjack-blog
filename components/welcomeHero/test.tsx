import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import WelcomeHero from '.'

describe('<WelcomeHero />', () => {
  it('Should render the WelcomeHero component correctly', () => {
    render(<WelcomeHero />)

    const welcomeHero = screen.getByTestId('welcomeHero-test-id')

    expect(welcomeHero).toBeInTheDocument()
  })
})
