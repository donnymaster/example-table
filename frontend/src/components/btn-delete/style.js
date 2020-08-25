import styled from 'styled-components';

const StyledBtn = styled.button`
    border-radius: 6px;
    padding: 16px 39px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: bold;
    
    background-color: ${(props) => {
        if(props.state === 'disable'){
            return "#ffffff";
        }else{
            return "#0085be";
        } 
    }};

    color: ${(props) => {
        if(props.state === 'disable'){
            return "#dadada";
        }else{
            return "#ffffff";
        } 
    }};
    border: ${(props) => {
        if(props.state === 'disable'){
            return "solid 2px #dadada";
        }else{
            return "none";
        } 
    }};
    cursor: pointer;
    margin-left: auto;
    display: block;
    &:hover{
        background: ${props => props.state === 'disable' ? 'initial' : '#02597e'};
        cursor: ${props => props.state === 'disable' ? 'auto' : 'pointer'};
    }
    &:active{
        outline: none;
    }
    outline: none;
`;

export default StyledBtn;