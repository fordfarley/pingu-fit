//@ts-nocheck
import styled from 'styled-components';

const Base = styled.div<{
  theme: { colors: object; spacing: object };
  color?: string;
  light?: boolean;
  center?: boolean;
  right?: boolean;
  bold?: boolean;
  normal?: boolean;
  noMargin?: boolean;
}>`
  color: ${({ theme: { colors }, color, light }) => {
    if (light) return colors.neutral_white;
    else if (color) return colors[`${color}`];
    else return colors.neutral_black;
  }};

  font-weight: ${({ bold, normal }) =>
    bold ? '600' : normal ? 'normal' : null};

  text-align: ${({ center, right }) => {
    if (center) return 'center';
    else if (right) return 'right';
    else return 'left';
  }};

  margin-bottom: ${({ theme: { spacing }, noMargin }) =>
    noMargin ? '0' : spacing._01};

  h1,
  h2,
  h3 {
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    font-weight: inherit;
  }

  bold {
    font-weight: 600;
  }

  p {
    margin-bottom: 10px;
  }
`;

export const SuperHero = styled(Base)<{
  theme: { fontScale: object; spacing: object; breakpoints: object };
}>`
  width: 100%;
  font-size: ${({ theme: { fontScale } }) => fontScale.hero.size};
  line-height: ${({ theme: { fontScale } }) => fontScale.hero.lineHeight};
  letter-spacing: ${({ theme: { fontScale } }) => fontScale.hero.letterSpacing};

  margin-bottom: ${({ theme: { spacing }, noMargin }) =>
    noMargin ? '0' : spacing._03};

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: ${({ theme: { fontScale } }) => fontScale.hero.size};
    line-height: ${({ theme: { fontScale } }) => fontScale.hero.lineHeight};
    letter-spacing: ${({ theme: { fontScale } }) =>
      fontScale.hero.letterSpacing};
  }

  @media ${(props) => props.theme.breakpoints.laptop} {
    font-size: ${({ theme: { fontScale } }) => fontScale.superHero.size};
    line-height: ${({ theme: { fontScale } }) =>
      fontScale.superHero.lineHeight};
    letter-spacing: ${({ theme: { fontScale } }) =>
      fontScale.superHero.letterSpacing};
  }
`;

export const Hero = styled(Base)<{
  theme: { fontScale: object; spacing: object; breakpoints: object };
}>`
  width: 100%;
  font-size: ${({ theme: { fontScale } }) => fontScale.superLarge.size};
  line-height: ${({ theme: { fontScale } }) => fontScale.superLarge.lineHeight};
  letter-spacing: ${({ theme: { fontScale } }) =>
    fontScale.superLarge.letterSpacing};

  margin-bottom: ${({ theme: { spacing }, noMargin }) =>
    noMargin ? '0' : spacing._03};

  @media ${(props) => props.theme.breakpoints.mobileXL} {
    font-size: ${({ theme: { fontScale } }) => fontScale.hero.size};
    line-height: ${({ theme: { fontScale } }) => fontScale.hero.lineHeight};
    letter-spacing: ${({ theme: { fontScale } }) =>
      fontScale.hero.letterSpacing};
  }

  @media ${(props) => props.theme.breakpoints.laptop} {
    font-size: ${({ theme: { fontScale } }) => fontScale.hero.size};
    line-height: ${({ theme: { fontScale } }) => fontScale.hero.lineHeight};
    letter-spacing: ${({ theme: { fontScale } }) =>
      fontScale.hero.letterSpacing};
  }
`;

export const ExtraLarge = styled(Base)<{
  theme: { fontScale: object; spacing: object; breakpoints: object };
}>`
  width: 100%;
  font-size: ${({ theme: { fontScale } }) => fontScale.extraLarge.size};
  line-height: ${({ theme: { fontScale } }) => fontScale.extraLarge.lineHeight};
  letter-spacing: ${({ theme: { fontScale } }) =>
    fontScale.extraLarge.letterSpacing};

  margin-bottom: ${({ theme: { spacing }, noMargin }) =>
    noMargin ? '0' : spacing._03};

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: ${({ theme: { fontScale } }) => fontScale.extraLarge.size};
    line-height: ${({ theme: { fontScale } }) =>
      fontScale.extraLarge.lineHeight};
    letter-spacing: ${({ theme: { fontScale } }) =>
      fontScale.extraLarge.letterSpacing};
  }

  @media ${(props) => props.theme.breakpoints.laptop} {
    font-size: ${({ theme: { fontScale } }) => fontScale.extraLarge.size};
    line-height: ${({ theme: { fontScale } }) =>
      fontScale.extraLarge.lineHeight};
    letter-spacing: ${({ theme: { fontScale } }) =>
      fontScale.extraLarge.letterSpacing};
  }
`;

export const SuperLarge = styled(Base)<{
  theme: { fontScale: object; spacing: object; breakpoints: object };
}>`
  width: 100%;
  font-size: ${({ theme: { fontScale } }) => fontScale.large.size};
  line-height: ${({ theme: { fontScale } }) => fontScale.large.lineHeight};
  letter-spacing: ${({ theme: { fontScale } }) =>
    fontScale.large.letterSpacing};

  margin-bottom: ${({ theme: { spacing }, noMargin }) =>
    noMargin ? '0' : spacing._03};

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: ${({ theme: { fontScale } }) => fontScale.superLarge.size};
    line-height: ${({ theme: { fontScale } }) =>
      fontScale.superLarge.lineHeight};
    letter-spacing: ${({ theme: { fontScale } }) =>
      fontScale.superLarge.letterSpacing};
  }

  @media ${(props) => props.theme.breakpoints.laptop} {
    font-size: ${({ theme: { fontScale } }) => fontScale.superLarge.size};
    line-height: ${({ theme: { fontScale } }) =>
      fontScale.superLarge.lineHeight};
    letter-spacing: ${({ theme: { fontScale } }) =>
      fontScale.superLarge.letterSpacing};
  }
`;

export const Large = styled(Base)<{
  theme: { fontScale: object; spacing: object; breakpoints: object };
}>`
  width: 100%;
  font-size: ${({ theme: { fontScale } }) => fontScale.large.size};
  line-height: ${({ theme: { fontScale } }) => fontScale.large.lineHeight};
  letter-spacing: ${({ theme: { fontScale } }) =>
    fontScale.large.letterSpacing};

  margin-bottom: ${({ theme: { spacing }, noMargin }) =>
    noMargin ? '0' : spacing._03};

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: ${({ theme: { fontScale } }) => fontScale.large.size};
    line-height: ${({ theme: { fontScale } }) => fontScale.large.lineHeight};
    letter-spacing: ${({ theme: { fontScale } }) =>
      fontScale.large.letterSpacing};
  }

  @media ${(props) => props.theme.breakpoints.laptop} {
    font-size: ${({ theme: { fontScale } }) => fontScale.large.size};
    line-height: ${({ theme: { fontScale } }) => fontScale.large.lineHeight};
    letter-spacing: ${({ theme: { fontScale } }) =>
      fontScale.large.letterSpacing};
  }
`;

export const Big = styled(Base)<{
  theme: { fontScale: object; spacing: object; breakpoints: object };
}>`
  width: 100%;
  font-size: ${({ theme: { fontScale } }) => fontScale.medium.size};
  line-height: ${({ theme: { fontScale } }) => fontScale.medium.lineHeight};
  letter-spacing: ${({ theme: { fontScale } }) =>
    fontScale.medium.letterSpacing};

  margin-bottom: ${({ theme: { spacing }, noMargin }) =>
    noMargin ? '0' : spacing._03};

  @media ${(props) => props.theme.breakpoints.mobileXL} {
    font-size: ${({ theme: { fontScale } }) => fontScale.big.size};
    line-height: ${({ theme: { fontScale } }) => fontScale.big.lineHeight};
    letter-spacing: ${({ theme: { fontScale } }) =>
      fontScale.big.letterSpacing};
  }

  @media ${(props) => props.theme.breakpoints.laptop} {
    font-size: ${({ theme: { fontScale } }) => fontScale.big.size};
    line-height: ${({ theme: { fontScale } }) => fontScale.big.lineHeight};
    letter-spacing: ${({ theme: { fontScale } }) =>
      fontScale.big.letterSpacing};
  }
`;

export const Medium = styled(Base)<{
  theme: { fontScale: object; spacing: object; breakpoints: object };
}>`
  width: 100%;
  font-size: ${({ theme: { fontScale } }) => fontScale.medium.size};
  line-height: ${({ theme: { fontScale } }) => fontScale.medium.lineHeight};
  letter-spacing: ${({ theme: { fontScale } }) =>
    fontScale.medium.letterSpacing};

  margin-bottom: ${({ theme: { spacing }, noMargin }) =>
    noMargin ? '0' : spacing._03};

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: ${({ theme: { fontScale } }) => fontScale.medium.size};
    line-height: ${({ theme: { fontScale } }) => fontScale.medium.lineHeight};
    letter-spacing: ${({ theme: { fontScale } }) =>
      fontScale.medium.letterSpacing};
  }

  @media ${(props) => props.theme.breakpoints.laptop} {
    font-size: ${({ theme: { fontScale } }) => fontScale.medium.size};
    line-height: ${({ theme: { fontScale } }) => fontScale.medium.lineHeight};
    letter-spacing: ${({ theme: { fontScale } }) =>
      fontScale.medium.letterSpacing};
  }
`;

export const Small = styled(Base)<{
  theme: { fontScale: object; spacing: object; breakpoints: object };
}>`
  width: 100%;
  font-size: ${({ theme: { fontScale } }) => fontScale.small.size};
  line-height: ${({ theme: { fontScale } }) => fontScale.small.lineHeight};
  letter-spacing: ${({ theme: { fontScale } }) =>
    fontScale.small.letterSpacing};

  margin-bottom: ${({ theme: { spacing }, noMargin }) =>
    noMargin ? '0' : spacing._03};

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: ${({ theme: { fontScale } }) => fontScale.small.size};
    line-height: ${({ theme: { fontScale } }) => fontScale.small.lineHeight};
    letter-spacing: ${({ theme: { fontScale } }) =>
      fontScale.small.letterSpacing};
  }

  @media ${(props) => props.theme.breakpoints.laptop} {
    font-size: ${({ theme: { fontScale } }) => fontScale.small.size};
    line-height: ${({ theme: { fontScale } }) => fontScale.small.lineHeight};
    letter-spacing: ${({ theme: { fontScale } }) =>
      fontScale.small.letterSpacing};
  }
`;

export const ExtraSmall = styled(Base)<{
  theme: { fontScale: object; spacing: object; breakpoints: object };
}>`
  width: 100%;
  font-size: ${({ theme: { fontScale } }) => fontScale.extraSmall.size};
  line-height: ${({ theme: { fontScale } }) => fontScale.extraSmall.lineHeight};
  letter-spacing: ${({ theme: { fontScale } }) =>
    fontScale.extraSmall.letterSpacing};

  margin-bottom: ${({ theme: { spacing }, noMargin }) =>
    noMargin ? '0' : spacing._03};

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: ${({ theme: { fontScale } }) => fontScale.extraSmall.size};
    line-height: ${({ theme: { fontScale } }) =>
      fontScale.extraSmall.lineHeight};
    letter-spacing: ${({ theme: { fontScale } }) =>
      fontScale.extraSmall.letterSpacing};
  }

  @media ${(props) => props.theme.breakpoints.laptop} {
    font-size: ${({ theme: { fontScale } }) => fontScale.extraSmall.size};
    line-height: ${({ theme: { fontScale } }) =>
      fontScale.extraSmall.lineHeight};
    letter-spacing: ${({ theme: { fontScale } }) =>
      fontScale.extraSmall.letterSpacing};
  }
`;
