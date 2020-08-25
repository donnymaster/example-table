import React from 'react';
import StyledBtn from './style';

class BtnDelete extends React.Component {

    render(){
        let ActiveStyles;
        const { onClickDelete, stateBtn } = this.props;
        if(stateBtn === 'active'){
            const ActiveStyles = {
                backgroundColor: '#0085be',
                color: '#ffffff'
            }
        }else{
            const ActiveStyles = {
                backgroundColor: 'white',
                color: '#dadada'
            }
        }
        return (
            <StyledBtn state={ActiveStyles} onClick={onClickDelete}>Удалить выбранные</StyledBtn>
        )
    }
}

export default BtnDelete;