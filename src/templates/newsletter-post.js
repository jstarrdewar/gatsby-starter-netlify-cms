import React from 'react'
import Helmet from 'react-helmet'

export const NewsletterPostTemplate = ({
  description,
  title,
  helmet,
}) => {
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>Bla bla bla</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}


export default ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <NewsletterPostTemplate
      description={post.frontmatter.description}
      helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} />}
      title={post.frontmatter.title}
    />
  )
}

export const pageQuery = graphql`
  query NewsletterPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
