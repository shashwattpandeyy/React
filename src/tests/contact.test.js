import { fireEvent, render, screen } from "@testing-library/react"
import Contact from "../Components/Contact"
import "@testing-library/jest-dom"
import Header from "../Components/Header"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import { BrowserRouter } from "react-router-dom"

test("Should load contact us component", () => {

  /**
   * Steps to test react component.
   * Render
   * Query ==> what we have to check?
   * Assertions
   */
  render(<Contact />)
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument()
})

it("Should header link works", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const contactUs = screen.getByText("Contact Us");
  // fireEvent.click(contactUs);
  // const button = screen.getByRole("button");
  expect(contactUs).toBeInTheDocument()

});