import React from 'react';

export default function TabPanel(props){
    /** This component is the contents of a Material-UI Tab, and wraps around the content of a Tab to hide/show
     * depending on the currently selected Tab **/
    let {className, value, index} = props;
    return(
        <div className={className} hidden={value !== index}>
            {props.children}
        </div>
    );
}