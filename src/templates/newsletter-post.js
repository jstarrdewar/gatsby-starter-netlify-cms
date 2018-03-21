import React from 'react'
import Helmet from 'react-helmet'

export const NewsletterPostTemplate = ({
  helmet,
  description,
  title,
  subtitle,
  content
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              #{title} {subtitle}
            </h1>
            <PostContent content={content} />
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
      helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} />}
      title={post.frontmatter.title}
      subtitle={post.frontmatter.subtitle}
      content={post.html}
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
        subtitle
        description
        links_sections {
          heading
          articles {
            title
            link
            comment
            source
          }
        }
      }
    }
  }
`
