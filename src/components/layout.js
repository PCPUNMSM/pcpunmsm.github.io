/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import {
  AppBar,
  Container,
  CssBaseline,
  Slide,
  useScrollTrigger,
} from "@material-ui/core"
import Header from "./header"

const useStyles = makeStyles(theme => ({
  appBar: {
    background: "#ffc82a",
  },
}))

const HideOnScroll = props => {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

const Layout = props => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar}>
          <Header siteTitle={data.site.siteMetadata.title} />
        </AppBar>
      </HideOnScroll>
      <Header />
      <Container>{props.children}</Container>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
