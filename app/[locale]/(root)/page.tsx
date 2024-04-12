'use client'
import { useTranslations } from 'next-intl'
import styled from 'styled-components'
import React, { useContext } from 'react'
import { ThemeContext } from '@/lib/themeProvider'

const Wrapper = styled.main`
  background-color: ${(props) => props.theme.pageBg};
  color: ${(props) => props.theme.text};
  transition: background-color 0.3s ease-in-out;
`

export default function Page() {
  const t = useTranslations('About')
  const { theme, setTheme } = useContext<any>(ThemeContext)
  const convertTheme = (theme: string) => {
    switch (theme) {
      case 'light':
        setTheme('dark')
        break
      case 'dark':
        setTheme('light')
        break
    }
  }

  return (
    <Wrapper>
      {/* Sticky Fixed */}
      <div>???</div>
      <button onClick={() => convertTheme(theme)}>{theme === 'light' ? '🌙 Dark Mode' : '🌞 Light Mode'}</button>

      {/* Main Layout */}
      <div></div>
    </Wrapper>
  )
}
