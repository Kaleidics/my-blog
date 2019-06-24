import React from "react"
import Link from "gatsby-link"
import home from "../images/home.png"
import blog from "../images/blog.png"
import about from "../images/about.png"

const Menu = () => (
  <div className="menu">
    <ul className="menu__navigation">
      <li>
        <Link to="/">
          <img src={home} className="u-image-size-small" />
          Home
        </Link>
      </li>
      <li>
        <Link to="/blog">
          <img src={blog} className="u-image-size-small" />
          Blog
        </Link>
      </li>
      <li>
        <Link to="/about">
          <img src={about} className="u-image-size-small" />
          About
        </Link>
      </li>
    </ul>
  </div>
)

export default Menu
