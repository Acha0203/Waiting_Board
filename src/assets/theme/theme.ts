import { CSSObject, FlattenSimpleInterpolation, SimpleInterpolation, css } from 'styled-components';
import { font } from './settings/font';
import { background } from './settings/background';

export const theme = {
  font,
  background,
  media: {
    base: (
      base: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
      @media (min-width: 1px) {
        ${css(base, ...interpolations)}
      }
    `,
    sm: (
      sm: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
      @media (min-width: 414px) {
        ${css(sm, ...interpolations)}
      }
    `,
    md: (
      md: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
      @media (min-width: 768px) {
        ${css(md, ...interpolations)}
      }
    `,
    lg: (
      lg: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
      @media (min-width: 1024px) {
        ${css(lg, ...interpolations)}
      }
    `,
    xl: (
      xl: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
      @media (min-width: 1280px) {
        ${css(xl, ...interpolations)}
      }
    `,
    xl2: (
      xl2: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
      @media (min-width: 1366px) {
        ${css(xl2, ...interpolations)}
      }
    `,
    xl3: (
      xl3: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
      @media (min-width: 1920px) {
        ${css(xl3, ...interpolations)}
      }
    `,
    xl4: (
      xl4: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
      @media (min-width: 2560px) {
        ${css(xl4, ...interpolations)}
      }
    `,
    xl5: (
      xl5: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
      @media (min-width: 3840px) {
        ${css(xl5, ...interpolations)}
      } ;
    `,
  },
} as const;
