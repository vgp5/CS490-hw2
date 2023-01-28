import { Link, routes } from '@redwoodjs/router'

const Article = ({ article }) => {
  return (
    <article>

        <h3>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h3>

      <div>{article.body}</div>
      <div>Posted at: {article.createdAt}</div>
    </article>
  )
}

export default Article