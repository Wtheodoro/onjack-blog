import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import PostCard from '.'

const postCardsProps = {
  name: 'jest',
  body: 'post body jest',
  id: 5,
  title: 'title jest',
  userId: 11,
  onPostClick: () => {},
  profilePicture: 'https://api.multiavatar.com/4613641.png',
  showComments: false,
  comments: [],
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

  it('Post must have the correct body text', () => {
    render(<PostCard {...postCardsProps} body='The correct body text' />)

    const postTitle = screen.getByText(/the correct body text/i)

    expect(postTitle).toBeInTheDocument()
  })

  it('Post must have the correct title', () => {
    render(<PostCard {...postCardsProps} title='The correct title' />)

    const postTitle = screen.getByText(/the correct title/i)

    expect(postTitle).toBeInTheDocument()
  })

  it('Should open comments container when post is clicked', async () => {
    const mockCallBack = jest.fn()

    render(<PostCard {...postCardsProps} onPostClick={mockCallBack} />)

    const card = screen.getByTestId('post-card-test-id')

    fireEvent.click(card)

    expect(mockCallBack).toHaveBeenCalledTimes(1)
  })
})
