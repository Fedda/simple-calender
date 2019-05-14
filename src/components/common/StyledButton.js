import styled from 'styled-components';

export const StyledRippleButton = styled.button`
    cursor: pointer;
    outline: none;
    border: none;    
    /* border-radius :${props => props.type == "round" ? '50%' : '0%'}; */
    box-shadow:0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12); 
    padding: 6px 16px;
    font-weight:500;
    text-transform:uppercase;
    
    ${({ type }) => {
        if (type == "round") {
            return `
                padding:0px;
                padding-top:1px;
                background-color: Transparent
                box-shadow:none;
                border-radius:50%;
                width:28px;
            `
        }
    }}

    &.ripple {
        background-position: center;
        transition: background 0.8s;
    }

    &.ripple:hover {
        background: #EBEBEB radial-gradient(circle, transparent 1%, #F5F5F5 1%) center/15000%;
    }

    &.ripple:active {
        background-color: #F2EFEF;
        background-size: 100%;
        transition: background 0s;
    }    
`

// export const StyledRoundRippleButton = styled(StyledRippleButton)`
//     border-radius:50%;
// `