import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import hero from '../images/hero.png'

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__textbox u-center-text">
      <Link to="/">
        <h1 className="heading-primary">Somnus</h1>
      </Link>
      <h2 className="heading-secondary u-font-16">Blog by Eddie Chu</h2>
    </div>
    <div className="header__logo-box">
      <img className="header__logo" src={hero} />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
