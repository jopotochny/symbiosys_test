import React, {useEffect} from 'react';
import * as eva from 'eva-icons';

import '../scss/Header.scss';
export default function Header(props){

    let {className} = props;
    return(
      <div className={className ? className : "header"}>
          {props.children}

      </div>
    );
}