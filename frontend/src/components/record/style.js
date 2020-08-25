import styled from 'styled-components';

const StyledTr = styled.tr`
   & td {
        font-family: Roboto;
        font-size: 14px;
        color: #4c4c4c;
        padding: 16px 20px;
   }
   & td:nth-child(8){
       text-align:right;
   }
`;

const StylesPathEdit = styled.svg`
   cursor: pointer;
   &:hover path{
       fill: #82af00;
   }
`;

const StylesPathDelete = styled.svg`
   cursor: pointer;
   margin-left: 26px;
   &:hover path{
       fill: #82af00;
   }
`;

export {
    StyledTr,
    StylesPathEdit,
    StylesPathDelete
}