import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <header>
      <h1>RedWood Blog (HW2) </h1>
      <p>
        Welcome!
      </p>
      <nav>
        <ul>
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
        </ul>
      </nav>
      </header>
    </>
  )
}

export default HomePage
