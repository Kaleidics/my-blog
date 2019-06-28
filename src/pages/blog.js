import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const BlogPage = ({ data }) => (
  <Layout>
    <section className="u-margin-top-medium">
      <h2 className="heading-secondary u-margin-top-small u-margin-bottom-small">
        Latest posts
      </h2>
      {data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id} className="u-margin-bottom-medium">
            <h3 className="heading-tertiary"><Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link></h3>
            <p className="paragraph">
              Posted by {post.node.frontmatter.author} on{" "}
              {post.node.frontmatter.date}
            </p>
            <Link to={post.node.frontmatter.path}>Read more</Link>
          </div>
      ))}
    </section>
  </Layout>
)

export const pageQuery = graphql`
         query BlogIndexQuery {
           allMarkdownRemark(
             sort: { fields: [frontmatter___date], order: DESC }
           ) {
             edges {
               node {
                 id
                 frontmatter {
                   path
                   title
                   date
                   author
                 }
               }
             }
           }
         }
       `

export default BlogPage
