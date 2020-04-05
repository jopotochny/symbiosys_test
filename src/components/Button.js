import React from 'react';

export default class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isSelected: false
        }
    }
    render(){
        let {className, handleOnClick, isSelected, icons} = this.props;
        if(isSelected !== this.state.isSelected){
            this.setState({isSelected: isSelected});
        }
        return(
            <button className={className} onClick={handleOnClick}>
                {isSelected ? icons.isSelected : icons.notSelected}
            </button>
        );
    }

}