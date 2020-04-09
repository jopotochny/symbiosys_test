import React, {useEffect} from 'react';

import * as eva from 'eva-icons';

import '../scss/Header.scss';
export default function Header(props){
    /** This component is a wrapper for the contents of the header (icons, buttons), and contains the test's
     * styling as its default styling. **/
    let {className} = props;
    return(
      <div className={className ? className : "header"}>
          {props.children}

      </div>
    );
}