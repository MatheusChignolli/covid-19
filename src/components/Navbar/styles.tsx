import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Image = styled.img`
  height: 100%;
  width: auto;
`

const Nav = styled.div`
  display: flex;
  padding: 0.5rem;
  height: 4rem;
  justify-content: space-between;
  margin-bottom: auto;
`

const StyledLink = styled(Link)<{ active: boolean }>`
  color: ${({ active }) => (active ? '#03bbc3' : '#fff')};
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 1.5rem;
  padding: 0 1rem;
  transition: 300ms;
  font-weight: bold;

  :hover {
    color: #03bbc3;
  }
`

const Title = styled.h2`
  color: #fff;
  max-width: 100%;
  margin: auto auto auto 0.5rem;
`

export { Image, Nav, StyledLink as Link, Title }
