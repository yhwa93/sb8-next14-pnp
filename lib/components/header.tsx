'use client'

import styled from 'styled-components'

const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
`

import * as S from '@/lib/responsiveStyle'
export default function Header() {
  return (
    <HeaderWrapper>
      <S.ResponsiveContainer>header</S.ResponsiveContainer>
    </HeaderWrapper>
  )
}
