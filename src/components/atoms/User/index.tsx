import React from 'react';
import styled from 'styled-components';

const UserWrapper = styled.div<{image:string, selected:boolean}>`
    height:150px;
    width:150px;
    display:flex;
    align-items:center;
    justify-content:center;
    background:${({ image }) => `url("${image}")`};
    background-size:cover;
    background-position:center;
    border-radius:${({ theme: { borderRadius } }) => `${borderRadius.boxes}`};
    transition: all 0.8s ease;
    transform:${({ selected }) => selected ? 'rotate(90deg)' : null};
`;

// background-color:${({ theme: { colors } }) => `${colors.neutral_200}`};

const User = ({user, selected, onClick}:{user:{name:string, image:string}, selected:boolean, onClick:()=>void}) => {
  return (
    <UserWrapper image={user.image} selected={selected} onClick={onClick} />
  )
}

export default User