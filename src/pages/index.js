import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Box } from "@material-ui/core"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const useStyles = makeStyles(theme => ({
  boldText: {
    fontWeight: 500,
  },
  blackText: {
    fontWeight: 900,
  },
}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Home" />
      <Box my={4} textAlign="center" fontWeight={900}>
        <Typography variant="h1" className={classes.blackText}>
          $\langle P | \hat C | P \rangle$
        </Typography>
      </Box>
      <Box my={4} textAlign="center">
        <Typography variant="h2" className={classes.boldText}>
          Python Club for Physicists
        </Typography>
      </Box>
      <Box my={4} textAlign="center" fontWeight={900}>
        <Typography variant="h3" className={classes.blackText}>
          ¡Próximamente!
        </Typography>
      </Box>
      <Box my={4} textAlign="center">
        <div
          style={{
            maxWidth: `300px`,
            marginBottom: `1.45rem`,
            display: `block`,
            marginLeft: `auto`,
            marginRight: `auto`,
          }}>
          <Image />
        </div>
      </Box>
    </Layout>
  )
}

export default IndexPage
