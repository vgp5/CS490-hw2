import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <header>
      <h1>AboutPage</h1>
      <nav>
        <ul>
          <li>
            <Link to={routes.home()}>Return Home</Link>
          </li>
        </ul>
      </nav>


      </header>
    </>
  )
}

export default AboutPage
