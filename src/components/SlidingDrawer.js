import React from 'react';

class SlidingDrawer extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        let {visibility, style} = this.props;
        let className = visibility ? "Visible" : "Invisible";
        return(
            <div className={"slidingDrawer"+ className} style={style}>
                {this.props.children}
            </div>
        );
    }
}