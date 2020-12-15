import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.palette.primary.dark};
  margin-bottom: 1.45rem;

  > div {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;

    > h1 {
      margin: 0;

      > a {
        color: ${({ theme }) => theme.palette.default.light};
        text-decoration: none;
      }
    }
  }
`
