import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <h2>Welcome!</h2>
      <>
        <ArticlesCell />
      </>
    </>
  )
}

export default HomePage
