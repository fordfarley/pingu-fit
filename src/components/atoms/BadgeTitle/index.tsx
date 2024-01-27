import styled from 'styled-components';

const TitleWrapper = styled.div`
    width:100%;
    padding:10px;
    background-color:${({ theme: { colors } }) => `${colors.neutral_800}`};
    position:relative;
`;

const BadgeTitle = ({children}:{children:JSX.Element}) => {
  return (
    <TitleWrapper>{children}</TitleWrapper>
  )
}

export default BadgeTitle