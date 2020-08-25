import styled from 'styled-components';

const StyledBtn = styled.button`
    border-radius: 6px;
    padding: 16px 39px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: bold;
    ${(props) => props.state}
    cursor: pointer;
    margin-left: auto;
    display: block;
    &:hover{
        background-color: #02597e;
    }
`;

export default StyledBtn;