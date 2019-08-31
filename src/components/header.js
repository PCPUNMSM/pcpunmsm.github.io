import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Toolbar } from "@material-ui/core"
import { Link } from "gatsby-theme-material-ui"

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
  titleLink: {
    color: "#212121",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  return (
    <Toolbar>
      <Typography variant="h6" className={classes.title}>
        <Link to="/" className={classes.titleLink}>
          {siteTitle}
        </Link>
      </Typography>
    </Toolbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
