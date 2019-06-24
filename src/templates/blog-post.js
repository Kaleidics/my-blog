import React from "react"
import Link from "gatsby-link"
import Layout from "../components/layout"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <section className="introduction u-margin-top-medium">
        <h2 className="heading-secondary">{post.frontmatter.title}</h2>
        <h3 className="heading-tertiary u-margin-bottom-small">
          posted by {post.frontmatter.author} on {post.frontmatter.date}
        </h3>
        <div className="paragraph" dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </section>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
