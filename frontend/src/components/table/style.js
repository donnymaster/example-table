import styled from 'styled-components';


const StyledTitle = styled.h2`
    height: 28px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: bold;
    color: #4c4c4c;
`;

const StyledTable = styled.table`
    border-collapse: collapse;
    width: 100%;
    overflow: hidden;
    border-radius: 6px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    margin-bottom: 24px;
`;

const StyledThead = styled.thead`
    background-color: #f0f0f0;
    font-family: Roboto;
    font-size: 14px;
    font-weight: bold;
    color: #4c4c4c;
    bor
`;

const StyledTheadTh = styled.th`
   padding: 16px 20px;
   text-align: left;
   color: #4c4c4c;
   &:nth-child(3){
       width: 25%;
   }
   &:nth-child(1){
    width: 10px;
    }
    &:nth-child(2){
     width: 20px;
    }
    &:nth-child(8){
    text-align:center;
    }
`;

const StyledTbody = styled.tbody`
    & tr:nth-child(even){
        background-color: #f2f2f2;
    }
`;

export {
    StyledTitle,
    StyledThead,
    StyledTable,
    StyledTheadTh,
    StyledTbody
}