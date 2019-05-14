import React from 'react';
import { StyledRippleButton, StyledRoundRippleButton } from './StyledButton';


export default function Button(props) {
    const { icon, onClick, text, type } = props;
    let iconMarkup = "";
    if (icon !== undefined) {
        iconMarkup = <i className="material-icons">{icon}</i>
    }
    let lol = 'jjj'
    return (
        <StyledRippleButton onClick={onClick} type={type} className="ripple">
            {iconMarkup}{text}
        </StyledRippleButton>

    )
}


