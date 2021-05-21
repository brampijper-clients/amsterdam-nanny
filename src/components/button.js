import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
    cursor: pointer;
    background: transparent;
    font-size: 1.5rem;
    padding: 1.3rem;
    border-radius: 5px;
    transition: all .5s;
    color: black;
    border: 2px solid black;
    font-weight: bold;

    &:hover {
        color: black;
        background: #FFF;
        text-decoration: none;
        border: 2px solid #1d3d51;
    }

    ${({secondary}) => secondary && css`
        padding: .8rem;
        font-size: 1.3rem;
        color: white;
        border: 1px solid black;
        background: black;

        &:hover {
            color: black;
            background: transparent;
            border: 1px solid black;
        }
    `}
`

// hardcoded email here? not good I guess? Also EVERY button will now have the onclick, maybe pass it as a prop?
const Button = ({ secondary, children, email }) => {
    return <StyledButton onClick={ () => window.location = `mailto:${email}` } secondary={secondary}>{children}</StyledButton>
}

export default Button;