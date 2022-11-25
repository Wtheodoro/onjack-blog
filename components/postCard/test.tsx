import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import PostCard from '.'

const postCardsProps = {
  name: 'jest',
  readTime: 8,
  body: 'post body jest',
  id: 5,
  title: 'title jest',
  userId: 11,
}

describe('<PostCard />', () => {
  it('Should render post card component correctly', () => {
    render(<PostCard {...postCardsProps} />)

    const card = screen.getByTestId('post-card-test-id')

    expect(card).toBeInTheDocument()
  })

  it('Post must have the correct post owner name', () => {
    render(<PostCard {...postCardsProps} name='The correct Name' />)

    const postOwnerName = screen.getByText(/the correct name/i)

    expect(postOwnerName).toBeInTheDocument()
  })

  it('Post must have the correct read time', () => {
    render(<PostCard {...postCardsProps} readTime={7} />)

    const postReadTime = screen.getByText(/7 min read/i)

    expect(postReadTime).toBeInTheDocument()
  })

  it('Post must have the correct body text', () => {
    render(<PostCard {...postCardsProps} title='The correct body text' />)

    const postTitle = screen.getByText(/the correct body text/i)

    expect(postTitle).toBeInTheDocument()
  })

  it('Post must have the correct title', () => {
    render(<PostCard {...postCardsProps} title='The correct title' />)

    const postTitle = screen.getByText(/the correct title/i)

    expect(postTitle).toBeInTheDocument()
  })
})
