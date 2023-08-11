import { render, screen } from "@testing-library/react"
import Contact from "../Components/Contact"
import "@testing-library/jest-dom"

test("Should load contact us component", () => {
  render(<Contact />)
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument()
})