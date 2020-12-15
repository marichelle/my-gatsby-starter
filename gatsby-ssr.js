import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from './src/theme/globalStyles'

export const wrapRootElement = ({ element }) => <>{element}</>

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
