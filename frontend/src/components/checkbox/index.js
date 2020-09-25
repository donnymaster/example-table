import React from 'react';
import * as s from './style';

class Checkbox extends React.Component {
    
    render(){
        const { click, isChecked, idx, disabled = false } = this.props;
        return (
            <s.StyledLabel background={isChecked} htmlFor={`checkbox-${idx}`}>
                <s.StyledCheckbox 
                    disabled={disabled} 
                    id={`checkbox-${idx}`} 
                    type="checkbox" 
                    onChange={click} 
                />
            </s.StyledLabel>
        )
    }
}

export default Checkbox;