import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Oops :(</h1>
    <p>La ruta no existe y nunca ha existido.</p>
  </Layout>
)

export default NotFoundPage
