import React from 'react'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'
import Tweets from '../components/Tweets'

export const NewsletterPostTemplate = ({
  helmet,
  description,
  title,
  subtitle,
  content,
  contentComponent,
  tweets
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
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              Tweets
            </h1>
            <Tweets tweets={tweets} />
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
      helmet={
        <Helmet title={`Newsletter #${post.frontmatter.title}`} >
        </Helmet>}
      title={post.frontmatter.title}
      subtitle={post.frontmatter.subtitle}
      content={post.html}
      contentComponent={HTMLContent}
      tweets={post.frontmatter.tweets}
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
        videos {
          description
          video
          comment
        }
        tweets {
          description
          id
          comment
        }
      }
    }
  }
`
