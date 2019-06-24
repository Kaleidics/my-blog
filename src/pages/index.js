import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Somnus" />
    <main>
      <section className="introduction u-center-text u-margin-top-small">
        <blockquote className="blockquote">
          <strong>
            <q>Good artists copy; great artists steal</q> — Steve Jobs
          </strong>
        </blockquote>
        <h2 className="heading-secondary u-margin-top-small u-margin-bottom-small">
          I think he's actually quoting Picasso
        </h2>
        <p className="paragraph">
          At least that's what Google tells me. And, onto my point about Google.
          Nowadays, there are so many online resources, it can be hard to
          distinguish between original work and a copy&pasted project.
        </p>
        <p className="paragraph">
          So as an exercise in <strong>transparency</strong> and <strong>accountability</strong>, I'm making this
          blog specifically to log my progress. I will be posting about my
          workflows (mostly getting stuck &#128528;) and citing resources and
          sources of inspiration in many ways like you would a research paper.
        </p>
        <p className="paragraph">
          To start things off, I made this blog with Gatsby and the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/gatsbyjs/gatsby-starter-blog"
          >
            Gatsby Blog Starter
          </a>
          . I was originally going to get something up and fast with Wordpress
          and a prebuilt theme. But, I decided it's probably better for me to
          actually develop a blog, since I'm a developer. I went with a space-y
          theme, since the Gatsby starter had this{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.gatsbyjs.org/static/b981f6404c9b0080b0c6d931cb274fb4/c9b65/gatsby-v2-astronaut.png"
          >
            astronaut guy
          </a>
          .
        </p>
        <p className="paragraph">
          Also, dark theme since I'm usually doing this in the wee hours of the
          night.
        </p>
      </section>
    </main>
  </Layout>
)

export default IndexPage
