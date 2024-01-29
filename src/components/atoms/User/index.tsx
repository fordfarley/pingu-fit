import React from 'react';
import styled from 'styled-components';

const UserWrapper = styled.div<{image:string}>`
    height:150px;
    width:150px;
    display:flex;
    align-items:center;
    justify-content:center;
    background:${({ image }) => `url("${image}")`};
    background-size:cover;
    background-position:center;
    border-radius:${({ theme: { borderRadius } }) => `${borderRadius.boxes}`};
    transition: all 0.5s ease;

    &:active{
      transform: rotate(90deg);
    }
`;

// background-color:${({ theme: { colors } }) => `${colors.neutral_200}`};

const User = ({user}:{user:{name:string, image:string}}) => {
  return (
    <UserWrapper image={user.image} />
  )
}

export default User