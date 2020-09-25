import styled from 'styled-components';

const StyledBtn = styled.button`
    border-radius: 6px;
    padding: 16px 39px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
    border: solid 2px white;
    background-color: #0085be;
    cursor: pointer;
    margin-left: auto;
    display: block;
    &:hover{
        background: #02597e;
        cursor: pointer;
    }
    &:disabled{ 
        color: #dadada;
        border: solid 2px #dadada;
        background-color: #ffffff;
        &:hover{
            background: initial;
            cursor: auto;
        }
    }
    &:active{
        outline: none;
    }
    outline: none;
`;

export default StyledBtn;