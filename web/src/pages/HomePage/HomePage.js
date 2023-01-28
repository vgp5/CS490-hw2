import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <p>Welcome!</p>
      <>
        <ArticlesCell />
      </>
    </>
  )
}

export default HomePage
