import React from 'react'

import { FooterWrapper } from './styles'

const Footer = ({ author }) => {
  return (
    <FooterWrapper>
      &copy; {new Date().getFullYear()}, Built by {author}
    </FooterWrapper>
  )
}

export default Footer
