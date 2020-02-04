import React from 'react'
import { styled } from 'linaria/lib/react'
import { media } from 'styles/utils'

export const Title = styled.div`
  background: blue;

  ${media.medium} {
    background: yellow;
  }

  ${media.large} {
    background: green;
  }

  ${media.extraLarge} {
    background: pink;
  }
`

const App = () => <Title>Grande diazao</Title>

export default App
