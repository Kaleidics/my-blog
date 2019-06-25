import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Somnus" />
      <section className="introduction u-center-text u-margin-top-small">
        <h2>Hi, I'm Eddie and I went to bed. It's like 1am and I've got work tomorrow.</h2>
        <p className="paragraph">I promise I'll have something here eventually.</p>
      </section>
  </Layout>
)

export default AboutPage
