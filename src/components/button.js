import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
    cursor: pointer;
    background: transparent;
    font-size: 1.5rem;
    padding: 1.3rem;
    border-radius: 5px;
    transition: all .5s;
    color: #EDF5E1;
    border: 1px solid #EDF5E1;

    ${({secondary}) => secondary && css`
        padding: .8rem;
        font-size: 1rem;
        color: black;
        border: 1px solid black;
    `}

    &:hover {
        color: #fff;
        background: #1d3d51;
        text-decoration: none;
        border: 1px solid #1d3d51;
    }
`

// hardcoded email here? not good I guess? Also EVERY button will now have the onclick, maybe pass it as a prop?
const Button = ({ secondary, children }) => {
    return <StyledButton onClick={ () => window.location = "mailto:nanny@abc.com" } secondary={secondary}>{children}</StyledButton>
}

export default Button;