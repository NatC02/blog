import React from "react"

const Footer = () => {
  return (
    <footer className="my-12 text-center">
      © {new Date().getFullYear()} |
      {` `}
      <a href="https://github.com/NatC02/blog">Natan Ceballos</a> 
    </footer>
  )
}

export default Footer
