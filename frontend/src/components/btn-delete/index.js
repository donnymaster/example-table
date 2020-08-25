import React from 'react';
import StyledBtn from './style';

class BtnDelete extends React.Component {

    render(){
        const { onClickDelete, stateBtn } = this.props;
        return (
            <StyledBtn state={stateBtn} onClick={onClickDelete}>Удалить выбранные</StyledBtn>
        )
    }
}

export default BtnDelete;