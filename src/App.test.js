import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('main rendering tests', () => {
  it('renders Welcome component', () => {
    render(<App />)
    const mainHeader = screen.getByRole('heading', {
      name: /Welcome to EpicBooks!/i,
    })
    expect(mainHeader).toBeInTheDocument()
  })

  it('renders all the 150 books', () => {
    render(<App />)
    const allTheBookCards = screen.getAllByTestId('book-card')
    expect(allTheBookCards).toHaveLength(150)
  })

  it('renders CommentArea component', () => {
    render(<App />)
    const reviewInputField = screen.getByPlaceholderText(
      /Add your comment/i
    )
    expect(reviewInputField).toBeInTheDocument()
  })
})

