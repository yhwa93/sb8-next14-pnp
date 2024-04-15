'use client'

import styled from 'styled-components'
import * as S from '@/lib/responsiveStyle'

const FooterWrapper = styled.footer`
  width: 100%;
  height: 160px;
`
export default function Footer() {
  return (
    <FooterWrapper>
      <S.ResponsiveContainer>footer</S.ResponsiveContainer>
    </FooterWrapper>
  )
}
