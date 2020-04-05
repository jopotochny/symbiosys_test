import React from 'react';
import Header from '../components/Header';
import EventCard from '../components/EventCard';
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
                      <EventCard date="19 Sept 2019" title="Get Best Site Advertiser In Your Side Pocket" location="Deonmouth"/>
                      <EventCard date="19 Sept 2019" title="Get Best Site Advertiser In Your Side Pocket" location="Deonmouth"/>
                      <EventCard date="19 Sept 2019" title="Get Best Site Advertiser In Your Side Pocket" location="Deonmouth"/>
                      <EventCard date="19 Sept 2019" title="Get Best Site Advertiser In Your Side Pocket" location="Deonmouth"/>
                      <EventCard date="19 Sept 2019" title="Get Best Site Advertiser In Your Side Pocket" location="Deonmouth"/>
                  </div>
              </div>
          </div>
        );
    }
}

export default Main;