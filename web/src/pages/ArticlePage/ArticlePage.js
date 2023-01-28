import {Links, routes} from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticleCell'

const ArticlePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <h1>Article Page</h1>
      <ArticlesCell id = {id}/>


    </>
  )
}

export default ArticlePage
