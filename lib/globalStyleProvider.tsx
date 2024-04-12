'use client'
import React, { useContext } from 'react'
import reset from 'styled-reset'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { darkTheme } from '@/lib/theme/darkTheme'
import { ThemeContext } from '@/lib/themeProvider'
import { lightTheme } from '@/lib/theme/lightTheme'

const GlobalStyleProviderWrapper = createGlobalStyle`
  ${reset}
  
  /* Custom Styles */
  html {
      font-size: 62.5%;
  }
`

export const GlobalStyleProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme, setTheme }: any = useContext(ThemeContext)

  return (
    <>
      <GlobalStyleProviderWrapper />
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>{children}</ThemeProvider>
    </>
  )
}
