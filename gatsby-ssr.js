import React from 'react'

import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from './styles'

const muiTheme = createMuiTheme(theme.muiTheme)

function RootWrapper({
  children,
  ThemeProvider,
  CssBaseline,
  muiTheme,
}) {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
          {children}
    </ThemeProvider>
  )
}

export const wrapRootElement = ({ element }) => {
  return <RootWrapper
  muiTheme={muiTheme}
  ThemeProvider={ThemeProvider}
  CssBaseline={CssBaseline}
>{element}
</RootWrapper>
}
