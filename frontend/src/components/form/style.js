import styled from 'styled-components';

const StyleForm = styled.div`
    position: fixed;
    left: 50vw;
    top: 30vh;
    transform: translate(-50%,-50%);
    background-color: white;
    border-radius: 4px;
    padding: 12px;
    z-index: 20;
`;

const StyleFormHeader = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   font-family: Roboto;
   font-size: 17px;
   font-weight: bold;
`;

const Overlay = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    cursor: pointer;
    background-color: rgba(0, 0, 0, .5);
    top: 0;
    left: 0;
    z-index: 10;
`;

const StyleFormHeaderTitle = styled.div`
   margin-right: 25px;
   margin-bottom: 10px;
`;

const StyleFormClose = styled.svg`
  cursor: pointer;
  align-self: flex-start;
  &:hover path{
        fill: #82af00;
    }
`;

export {
    StyleForm,
    Overlay,
    StyleFormHeader,
    StyleFormHeaderTitle,
    StyleFormClose
}