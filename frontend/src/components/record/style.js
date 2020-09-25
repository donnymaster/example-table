import styled from 'styled-components';

const StyledTr = styled.tr`
   & td {
        font-family: Roboto;
        font-size: 14px;
        color: #4c4c4c;
        padding: 16px 20px;
   }
   & td:nth-child(8){
       text-align:center;
   }
   & td:nth-child(9){
    text-align:right;
}
`;

const StylesPath = styled.svg`
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
const StylePositionItem = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-family: Roboto;
  border: 1px solid #82af00;
  &:last-child{
    margin-bottom:0;
  }
`;
const StylePositionIndex = styled.div`
    padding: 5px;
    border-right: 1px solid #82af00;
`;

const StylePositionName = styled.div`
    padding: 5px;
`;

export {
    StyledTr,
    StylesPathDelete,
    StylesPath,
    StylePositionItem,
    StylePositionIndex,
    StylePositionName
}