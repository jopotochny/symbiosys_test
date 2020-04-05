import React from 'react';
import Header from '../components/Header';
import '../scss/Main.scss';
class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        return(
          <div className="mainDiv">
              <Header/>
              <div className="eventsDiv">
                  <div className="searchMenu"></div>
                  <div className="searchResults">

                  </div>
              </div>
          </div>
        );
    }
}