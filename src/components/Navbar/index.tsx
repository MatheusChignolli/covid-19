import React, { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { Image, Link, Nav, Title } from './styles'

const Navbar: FC = () => {
  const { pathname } = useLocation()

  const links = [
    {
      to: '/',
      label: 'Brasil',
    },
    {
      to: '/world',
      label: 'Mundo',
    },
  ]

  return (
    <Nav>
      <Image src="/images/covid-logo.png" alt="Logo Covid" />
      <Title>Relatório Covid-19</Title>
      {links.map(({ to, label }, i) => (
        <Link key={`link-${i}`} to={to} active={to === pathname}>
          {label}
        </Link>
      ))}
    </Nav>
  )
}

export default Navbar
