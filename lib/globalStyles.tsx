'use client'
import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'
import React from 'react'

const GlobalStyledWrapper = createGlobalStyle`
  ${reset}
`

export const GlobalStyles = () => {
  return <GlobalStyledWrapper />
}
