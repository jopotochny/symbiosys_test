import React from 'react';
import '../scss/Header.scss';
export default function Header(props){
    let {className} = props;
    return(
      <div className={className ? className : "header"}>

      </div>
    );
}