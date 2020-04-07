import React from 'react';

export default function TabPanel(props){
    let {className, value, index} = props;
    return(
        <div className={className} hidden={value !== index}>
            {props.children}
        </div>
    );
}