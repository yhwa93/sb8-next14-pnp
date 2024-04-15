'use client'
import styled from 'styled-components'

export const ResponsiveStyle = styled.div`
  min-height: 1080px;

  /* Big_Desktop: 1921px ~ */
  @media screen and (min-width: 1921px) {
    width: 100%;
    background-color: red;
  }

  /* Middle_Desktop: 1441px ~ 1920px */
  @media screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 100%;
    background-color: orange;
  }

  /* Small_Desktop (13인치): 1025px ~ 1440px */
  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    width: 100%;
    background-color: yellow;
  }

  /* Tablet: 769px ~ 1024px */
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    background-color: green;
  }

  /* Mobile_Big (Galaxy Fold horizontal): 461px ~ 768px */
  @media screen and (min-width: 461px) and (max-width: 768px) {
    width: 100%;
    background-color: blue;
  }

  /* Mobile_middle: 321px ~ 460px */
  @media screen and (min-width: 321px) and (max-width: 460px) {
    width: 100%;
    background-color: hotpink;
  }

  /* Mobile_small: 281px ~ 320px */
  @media screen and (min-width: 281px) and (max-width: 375px) {
    width: 100%;
    background-color: violet;
  }

  /* 0px - 280px (Galaxy Fold vertical) */
  @media screen and (max-width: 280px) {
    min-width: ${(props) => props.theme.mobile_fold.min_width};
    background-color: greenyellow;
  }
`

export const ResponsiveContainer = styled.div`
  width: 1120px;
  height: inherit;
  margin: auto;
  background-color: brown;
`

export const MainResponsiveContainer = styled.main`
  width: 1120px;
  min-height: 1000px;
  margin: auto;
  background-color: brown;
`
