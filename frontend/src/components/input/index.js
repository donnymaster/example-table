import React from 'react';
import * as s from './style';

class Input extends React.Component {
    
    render(){
        const idx = Math.random().toString(36).substr(2, 9);
        const { click, isChecked } = this.props;
        return (
            <s.StyledLabel background={isChecked} htmlFor={`input-${idx}`}>
                <s.StyledInput id={`input-${idx}`} type="checkbox" onChange={click} />
            </s.StyledLabel>
        )
    }
}

export default Input;