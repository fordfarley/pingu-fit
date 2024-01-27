// @ts-nocheck
import styled from 'styled-components';
import Image from 'next/image';

const IconWrapper = styled.span`
  display: flex;
  font-size: 26px;
  margin-left: 14px;
  transform: translateX(0);
  transition: ${({ theme: { transition } }) =>
    `all ${transition.duration} ${transition.timingFunction}`};
`;

const PenContainer = styled.span`
  position: relative;
  line-height: 0;
`;

const Line = styled.div`
  height: 0px;
  width: 0px;
  border-bottom: 2px solid white;
  position: absolute;
  bottom: 0px;
  right: 2px;
  transition: ${({ theme: { transition } }) =>
    `all ${transition.duration} ${transition.timingFunction}`};
`;

const BaseButton = styled.button<{
  theme: {
    borderRadius: object;
    transition: object;
    colors: object;
    ctaColors: object;
    ctas: object;
    font: object;
    fontScale: object;
    spacing: object;
  };
  minWidth?: string;
  maxWidth?: string;
  width?: string;
  margin?: string;
  noBold?: boolean;
}>`
  align-items: center;
  display: flex;
  justify-content: center;
  text-decoration: none;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius.buttons};
  transition: ${({ theme: { transition } }) =>
    `all ${transition.duration} ${transition.timingFunction}`};

  height: 40px;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : null)};
  margin: ${({ margin }) => (margin ? margin : null)};
  font-weight: ${({ noBold }) => (!noBold ? '600' : null)};
  font-size: ${({ theme: { fontScale } }) => fontScale.medium.size};
  padding: ${({ theme: { spacing } }) => `${spacing._03} ${spacing._04}`};
  border: ${({ theme: { colors } }) => `solid 2px transparent`};
  background-color: transparent;

  #union {
    margin-left: 10px;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover,
  &:active:enabled {
    ${IconWrapper} {
      transform: translateX(60%);
      #line {
        width: 20px;
      }
    }
  }

  &:disabled {
    background-color: ${({ theme: { colors } }) => colors.neutral_200};
    color: ${({ theme: { colors } }) => colors.neutral_400};
    &:hover {
      background-color: ${({ theme: { colors } }) => colors.neutral_200};
      color: ${({ theme: { colors } }) => colors.neutral_400};
    }
  }

  @media ${(props) => props.theme.breakpoints.mobileM} {
    min-width: ${({ minWidth }) => (minWidth ? minWidth : null)};
  }
`;

const Primary = styled(BaseButton)`
  background: ${({
    theme: {
      ctas: { primary },
    },
  }) => primary.background};
  border: ${({
    theme: {
      ctas: { primary },
    },
  }) => `${primary.border} solid ${primary.borderColor}`};
  color: ${({
    theme: {
      ctas: { primary },
    },
  }) => primary.textColor};
  padding: ${({
    theme: {
      ctas: { primary },
    },
  }) => (primary.padding ? primary.padding : null)};
  width: auto;

  &:hover,
  &:active:enabled {
    background: ${({
      theme: {
        ctas: {
          primary: { hover },
        },
      },
    }) => hover.background};
    border: ${({
      theme: {
        ctas: {
          primary: { hover },
        },
      },
    }) => `${hover.border} solid ${hover.borderColor}`};
    color: ${({
      theme: {
        ctas: {
          primary: { hover },
        },
      },
    }) => hover.textColor};
    transform: scale(1.05, 1.05);
    box-shadow: 0px 6px 5px -3px rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    background: ${({
      theme: {
        ctas: {
          primary: { disabled },
        },
      },
    }) => disabled.background};
    border: ${({
      theme: {
        ctas: {
          primary: { disabled },
        },
      },
    }) => `${disabled.border} solid ${disabled.borderColor}`};
    color: ${({
      theme: {
        ctas: {
          primary: { disabled },
        },
      },
    }) => disabled.textColor};
    transform: scale(1, 1);
    box-shadow: none;
  }
`;

const Rounded = styled(BaseButton)`
  background: ${({
    theme: {
      ctas: { primary },
    },
  }) => primary.background};
  border: ${({
    theme: {
      ctas: { primary },
    },
  }) => `${primary.border} solid ${primary.borderColor}`};
  color: ${({
    theme: {
      ctas: { primary },
    },
  }) => primary.textColor};
  padding: ${({
    theme: {
      ctas: { primary },
    },
  }) => (primary.padding ? primary.padding : null)};
  width: 60px;
  height: 60px;
  border-radius:50%;

  &:hover,
  &:active:enabled {
    background: ${({
      theme: {
        ctas: {
          primary: { hover },
        },
      },
    }) => hover.background};
    border: ${({
      theme: {
        ctas: {
          primary: { hover },
        },
      },
    }) => `${hover.border} solid ${hover.borderColor}`};
    color: ${({
      theme: {
        ctas: {
          primary: { hover },
        },
      },
    }) => hover.textColor};
    transform: scale(1.05, 1.05);
    box-shadow: 0px 6px 5px -3px rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    background: ${({
      theme: {
        ctas: {
          primary: { disabled },
        },
      },
    }) => disabled.background};
    border: ${({
      theme: {
        ctas: {
          primary: { disabled },
        },
      },
    }) => `${disabled.border} solid ${disabled.borderColor}`};
    color: ${({
      theme: {
        ctas: {
          primary: { disabled },
        },
      },
    }) => disabled.textColor};
    transform: scale(1, 1);
    box-shadow: none;
  }
`;

const Secondary = styled(BaseButton)`
  background: ${({
    theme: {
      ctas: { secondary },
    },
  }) => secondary.background};
  border: ${({
    theme: {
      ctas: { secondary },
    },
  }) => `${secondary.border} solid ${secondary.borderColor}`};
  color: ${({
    theme: {
      ctas: { secondary },
    },
  }) => secondary.textColor};
  padding: ${({
    theme: {
      ctas: { secondary },
    },
  }) => (secondary.padding ? secondary.padding : null)};

  &:hover,
  &:active:enabled {
    background: ${({
      theme: {
        ctas: {
          secondary: { hover },
        },
      },
    }) => hover.background};
    border: ${({
      theme: {
        ctas: {
          secondary: { hover },
        },
      },
    }) => `${hover.border} solid ${hover.borderColor}`};
    color: ${({
      theme: {
        ctas: {
          secondary: { hover },
        },
      },
    }) => hover.textColor};
  }

  &:disabled {
    background: ${({
      theme: {
        ctas: {
          secondary: { disabled },
        },
      },
    }) => disabled.background};
    border: ${({
      theme: {
        ctas: {
          secondary: { disabled },
        },
      },
    }) => `${disabled.border} solid ${disabled.borderColor}`};
    color: ${({
      theme: {
        ctas: {
          secondary: { disabled },
        },
      },
    }) => disabled.textColor};
  }
`;

const SecondaryHover = styled(BaseButton)`
  background: ${({
    theme: {
      ctas: {
        secondary: { hover },
      },
    },
  }) => hover.background};
  border: ${({
    theme: {
      ctas: {
        secondary: { hover },
      },
    },
  }) => `${hover.border} solid ${hover.borderColor}`};
  color: ${({
    theme: {
      ctas: {
        secondary: { hover },
      },
    },
  }) => hover.textColor};
`;

const SecondaryRed = styled(BaseButton)`
  background: ${({
    theme: {
      ctas: { red },
    },
  }) => red.background};
  border: ${({
    theme: {
      ctas: { red },
    },
  }) => `${red.border} solid ${red.borderColor}`};
  color: ${({
    theme: {
      ctas: { red },
    },
  }) => red.textColor};
  padding: ${({
    theme: {
      ctas: { red },
    },
  }) => (red.padding ? red.padding : null)};

  &:hover,
  &:active:enabled {
    background: ${({
      theme: {
        ctas: {
          red: { hover },
        },
      },
    }) => hover.background};
    border: ${({
      theme: {
        ctas: {
          red: { hover },
        },
      },
    }) => `${hover.border} solid ${hover.borderColor}`};
    color: ${({
      theme: {
        ctas: {
          red: { hover },
        },
      },
    }) => hover.textColor};
  }

  &:disabled {
    background: ${({
      theme: {
        ctas: {
          red: { disabled },
        },
      },
    }) => disabled.background};
    border: ${({
      theme: {
        ctas: {
          red: { disabled },
        },
      },
    }) => `${disabled.border} solid ${disabled.borderColor}`};
    color: ${({
      theme: {
        ctas: {
          red: { disabled },
        },
      },
    }) => disabled.textColor};
  }
`;

const SecondaryGray = styled(BaseButton)`
  background: ${({
    theme: {
      ctas: { gray },
    },
  }) => gray.background};
  border: ${({
    theme: {
      ctas: { gray },
    },
  }) => `${gray.border} solid ${gray.borderColor}`};
  color: ${({
    theme: {
      ctas: { gray },
    },
  }) => gray.textColor};
  padding: ${({
    theme: {
      ctas: { gray },
    },
  }) => (gray.padding ? gray.padding : null)};

  &:hover,
  &:active:enabled {
    background: ${({
      theme: {
        ctas: {
          gray: { hover },
        },
      },
    }) => hover.background};
    border: ${({
      theme: {
        ctas: {
          gray: { hover },
        },
      },
    }) => `${hover.border} solid ${hover.borderColor}`};
    color: ${({
      theme: {
        ctas: {
          gray: { hover },
        },
      },
    }) => hover.textColor};
  }

  &:disabled {
    background: ${({
      theme: {
        ctas: {
          gray: { disabled },
        },
      },
    }) => disabled.background};
    border: ${({
      theme: {
        ctas: {
          gray: { disabled },
        },
      },
    }) => `${disabled.border} solid ${disabled.borderColor}`};
    color: ${({
      theme: {
        ctas: {
          gray: { disabled },
        },
      },
    }) => disabled.textColor};
  }
`;

const Tertiary = styled(BaseButton)`
  background: ${({
    theme: {
      ctas: { tertiary },
    },
  }) => tertiary.background};
  border: ${({
    theme: {
      ctas: { tertiary },
    },
  }) => `${tertiary.border} solid ${tertiary.borderColor}`};
  color: ${({
    theme: {
      ctas: { tertiary },
    },
  }) => tertiary.textColor};
  padding: ${({
    theme: {
      ctas: { tertiary },
    },
  }) => (tertiary.padding ? tertiary.padding : null)};

  &:hover,
  &:active:enabled {
    background: ${({
      theme: {
        ctas: {
          tertiary: { hover },
        },
      },
    }) => hover.background};
    border: ${({
      theme: {
        ctas: {
          tertiary: { hover },
        },
      },
    }) => `${hover.border} solid ${hover.borderColor}`};
    color: ${({
      theme: {
        ctas: {
          tertiary: { hover },
        },
      },
    }) => hover.textColor};
  }

  &:disabled {
    background: ${({
      theme: {
        ctas: {
          tertiary: { disabled },
        },
      },
    }) => disabled.background};
    border: ${({
      theme: {
        ctas: {
          tertiary: { disabled },
        },
      },
    }) => `${disabled.border} solid ${disabled.borderColor}`};
    color: ${({
      theme: {
        ctas: {
          tertiary: { disabled },
        },
      },
    }) => disabled.textColor};
  }
`;

const Social = styled(BaseButton)`
  border: ${({ theme: { colors } }) => `solid 2px ${colors.neutral_400}`};
  color: ${({ theme: { colors } }) => colors.neutral_600};
  border-radius: 90px;
  &:hover,
  &:active:enabled {
    background-color: ${({ theme: { colors } }) => colors.primary_100};
  }
`;

const Product = styled(Primary)`
  width: fit-content;
`;

const Disclaimer = styled(BaseButton)`
  font-size: ${({ theme: { fontScale } }) => fontScale.extraSmall.size};
  font-weight: normal;
  margin: ${({ theme: { spacing } }) => `${spacing._02} ${spacing._06}`};
  display: inline-block;
  background: ${({
    theme: {
      ctas: { disclaimer },
    },
  }) => disclaimer.background};
  border: ${({
    theme: {
      ctas: { disclaimer },
    },
  }) => `${disclaimer.border} solid ${disclaimer.borderColor}`};
  color: ${({
    theme: {
      ctas: { disclaimer },
    },
  }) => disclaimer.textColor};
  padding: ${({
    theme: {
      ctas: { disclaimer },
    },
  }) => (disclaimer.padding ? disclaimer.padding : null)};
  max-height: 28px;

  &:hover,
  &:active:enabled {
    background: ${({
      theme: {
        ctas: {
          disclaimer: { hover },
        },
      },
    }) => hover.background};
    border: ${({
      theme: {
        ctas: {
          disclaimer: { hover },
        },
      },
    }) => `${hover.border} solid ${hover.borderColor}`};
    color: ${({
      theme: {
        ctas: {
          disclaimer: { hover },
        },
      },
    }) => hover.textColor};
  }
`;

const AccountState = styled(BaseButton)`
  background: ${({
    theme: {
      ctas: { state },
    },
  }) => state.background};
  border: ${({
    theme: {
      ctas: { state },
    },
  }) => `${state.border} solid ${state.borderColor}`};
  color: ${({
    theme: {
      ctas: { state },
    },
  }) => state.textColor};
  padding: ${({
    theme: {
      ctas: { state },
    },
  }) => (state.padding ? state.padding : null)};

  min-width: fit-content;
  font-size: ${({ theme: { fontScale } }) => fontScale.extraSmall.size};
  line-height: ${({ theme: { fontScale } }) => fontScale.extraSmall.lineHeight};
  letter-spacing: ${({ theme: { fontScale } }) =>
    fontScale.extraSmall.letterSpacing};

  &:disabled {
    background: ${({
      theme: {
        ctas: {
          state: { disabled },
        },
      },
    }) => disabled.background};
    border: ${({
      theme: {
        ctas: {
          state: { disabled },
        },
      },
    }) => `${disabled.border} solid ${disabled.borderColor}`};
    color: ${({
      theme: {
        ctas: {
          state: { disabled },
        },
      },
    }) => disabled.textColor};
  }
`;

const ButtonTypes = {
  primary: Primary,
  rounded: Rounded,
  secondary: Secondary,
  secondary_hover: SecondaryHover,
  secondary_red: SecondaryRed,
  secondary_gray: SecondaryGray,
  tertiary: Tertiary,
  disclaimer: Disclaimer,
  social: Social,
  product: Product,
  accountState: AccountState,
};

interface Props {
  btnType?: string;
  minWidth?: string;
  maxWidth?: string;
  width?: string;
  margin?: string;
  noIcon?: boolean;
  theme: {
    borderRadius: object;
    transition: object;
    colors: object;
    font: object;
    spacing: object;
  };
}

const StyledButton = (props: Props) => {
  const ThemedComponent = ButtonTypes[props.btnType || 'primary'];
  return <ThemedComponent {...props} />;
};

const Button = (props) => {
  return (
    <StyledButton {...props} as={!props.disabled ? 'div' : null}>
      {props.children}
      {props.icon && props.btnType && props.btnType !== 'primary' && (
        <IconWrapper>{props.icon}</IconWrapper>
      )}

      {props.btnType === 'product' && !props.noIcon && (
        <IconWrapper id="union">
          <PenContainer>
            <Line id="line" />
            <Image
              src="/icons/union.svg"
              width="19"
              height="19"
              alt="union icon"
            />
          </PenContainer>
        </IconWrapper>
      )}
    </StyledButton>
  );
};

export default Button;
