import React from 'react'
import { FaLinkedin } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <h1>Halaman Portofolio</h1>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/kenafsm/">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/kenafsm/">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/kenaffilasyach.maulana">
            <FaFacebook />
          </a>
          <a href="https://github.com/kenafsm">
            <FaGithub />
          </a>
        </div>
    </nav>
  )
}

export default Navbar