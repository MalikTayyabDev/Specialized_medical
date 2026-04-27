import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const NotFoundPage = () => {
  return (
    <main className="page-404">
      <div className="container">
        <h1 className="page-404__title">Page not found</h1>
        <p className="page-404__text">
          Sorry, we couldn&apos;t find what you were looking for.
        </p>
        {process.env.NODE_ENV === "development" ? (
          <p className="page-404__hint">
            Try creating a page in <code>src/pages/</code>.
          </p>
        ) : null}
        <Link to="/" className="btn btn--primary">
          Go home
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage

export const Head = ({ location }) => (
  <Seo
    title="Page not found"
    description="The page you requested could not be found."
    pathname={location?.pathname}
    image="/images/figma-services/hero.jpg"
  />
)
