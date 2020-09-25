import styled from 'styled-components';

const StyledLabel = styled.label`
    position: relative;
    width: 18px;
    height: 18px;
    display: block;
    cursor: pointer;
    &::after{
        content: "";
        position: absolute;
        border-radius: 6px;
        border: solid 2px #e8e8e8;
        width: 18px;
        background-color: white;
        height: 18px;
    }
    &:before{
        content: "";
        position: absolute;
        display: ${props => props.background ? 'block' : 'none'};
        width: 16px;
        z-index: 11;
        height: 16px;
        border-radius: 3px;
        background-color: #82af00;
        top: 62%;
        left: 62%;
        transform: translate(-50%, -50%);
    }
`;

const StyledCheckbox = styled.input`
    display: none;
`;


export {
    StyledCheckbox,
    StyledLabel
}