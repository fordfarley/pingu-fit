import React from 'react';
import styled from 'styled-components';

const UserWrapper = styled.div`
    height:150px;
    width:150px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:${({ theme: { colors } }) => `${colors.neutral_200}`};
    border-radius:${({ theme: { borderRadius } }) => `${borderRadius.boxes}`};
`;

const User = ({user}:{user:{name:string}}) => {
  return (
    <UserWrapper>{user.name}</UserWrapper>
  )
}

export default User