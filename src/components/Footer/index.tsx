import React, { FC } from 'react'
import { FaGithub, FaLinkedin, FaUserAstronaut } from 'react-icons/fa'
import { Copyright, Credits, IconLink, Link } from './styles'

const Footer: FC = () => {
  return (
    <Credits>
      <IconLink
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
        href="https://github.com/MatheusChignolli/covid-19"
      >
        <FaGithub />
      </IconLink>
      <IconLink
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
        href="https://www.linkedin.com/in/matheus-richard-chignolli-a0115b155/"
      >
        <FaLinkedin />
      </IconLink>
      <IconLink
        target="_blank"
        rel="noopener noreferrer"
        title="Site"
        href="https://chignolli.com.br"
      >
        <FaUserAstronaut />
      </IconLink>
      <Copyright>
        2020 ©{' '}
        <Link href="https://chignolli.com.br">Chignolli Desenvolvimento</Link>
      </Copyright>
    </Credits>
  )
}

export default Footer
