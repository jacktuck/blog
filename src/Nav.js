import React from "react";
import './Nav.scss'

function Nav() {
  return (
    <div id="nav">
      <p>
        Hi 👋🏼I'm Jack, a software engineer. I live in Gloucester, England. I will be writing about Go and Node.js mostly.
      </p>
      <ul>
        <li><a href="https://github.com/jacktuck">GitHub</a></li>
        <li><a href="https://stackoverflow.com/users/2784487/jack-tuck">StackOverflow</a></li>
        <li><a href="https://twitter.com/jack_tuck">Twitter</a></li>
        <li><a href="https://drive.google.com/open?id=1-JbIMOg6JZUCCjbI_iBqgyH5r4PnRFZg">CV</a></li>
      </ul>
    </div>
  )
}

export default Nav;