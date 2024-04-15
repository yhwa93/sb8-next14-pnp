'use client'
import React from 'react'
import reset from 'styled-reset'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { ResponsiveTheme } from '@/lib/responsiveTheme'

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  /* Custom Styles */
  html {
      font-size: 62.5%;
  }
`

export const GlobalStyleProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={ResponsiveTheme}>{children}</ThemeProvider>
    </>
  )
}
