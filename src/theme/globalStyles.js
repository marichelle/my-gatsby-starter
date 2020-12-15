import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    color: ${({ theme }) => theme.palette.primary.dark};
    font-family: ${({ theme }) => theme.font.sans};
    font-size: ${({ theme }) => theme.fontSize.base};
    scroll-behavior: smooth;
  }

  body {
    letter-spacing: 0;
    line-height: 1.5rem;
  }

  a {
    color: ${({ theme }) => theme.palette.primary.dark};
    text-decoration: none;
  }

  button {
    outline: 0;
  }
`

export const theme = {
  border: {
    default: '1px solid #663399',
    radius: '0.3125rem',
  },
  color: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
  },
  font: {
    sans: '"Roboto", sans-serif',
    serif: 'sans',
    monospace: 'monospace',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
  fontWeight: {
    hairline: '100',
    thin: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  palette: {
    default: {
      light: '#fcfaff',
      dark: '#111',
    },
    primary: {
      light: '#f1defa',
      dark: '#663399',
    },
    secondary: {
      light: '#8a4baf',
      dark: '#362066',
    },
  },
  screens: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
}
