import styled from 'styled-components'

const Credits = styled.footer`
  display: flex;
  align-items: center;
  margin-top: auto;
  padding: 0.5rem;
`

const Copyright = styled.p`
  color: #fff;
  margin: auto 0 0 auto;
`

const Link = styled.a`
  color: #fff;
  transition: 300ms;
  text-decoration: none;

  :hover {
    color: #03bbc3;
  }
`

const IconLink = styled(Link)`
  margin: auto 0 0 0.5rem;
  font-size: 1.75rem;
  display: flex;
  align-items: flex-end;
`

export { Copyright, Credits, IconLink, Link }
