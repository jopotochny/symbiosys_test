import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import EventCard from '../components/EventCard';
import Button from '../components/Button';
import { Drawer } from '@material-ui/core';
import '../scss/Main.scss';
function Main(props){


    let [menuDrawerVisible, setMenuDrawerVisible] = useState(false);
    let [headerDrawerVisible, setHeaderDrawerVisible] = useState(false);
    let [selectedRightButton, setSelectedRightButton] = useState("none");
    let toggleMenuDrawer = () => {
        setMenuDrawerVisible(!menuDrawerVisible);
    };
    let toggleHeaderDrawer = (button) => {
      setHeaderDrawerVisible(!headerDrawerVisible);
      selectedRightButton === button ? setSelectedRightButton("none") : setSelectedRightButton(button);
    };
    return(
      <div className={(menuDrawerVisible ? "mainDivShiftLeft" : "mainDiv") + (headerDrawerVisible ? " mainDivShiftRight" : "")}>
          <Drawer anchor="left" variant="persistent" open={menuDrawerVisible}>
              <div className="menuDrawer">
                  <img className="logoImage" src={"/logo.svg"}/>
              </div>
          </Drawer>
          <Drawer anchor="right" variant="persistent">
              <div className="headerDrawer"></div>
          </Drawer>
          <Header>
              <div className="menuIconDiv">
                  <button className="menuIconButton" onClick={() => toggleMenuDrawer()}>
                        <i className="menuIcon" data-eva="menu-arrow-outline" data-eva-width="24px" data-eva-height="24px" data-eva-fill="gray"/>
                  </button>
              </div>
              <div className="rightIconsDiv">
                  <button className={selectedRightButton === "friends" ? "rightIconButtonSelected": "rightIconButton"}>
                      <i className="rightIcon" data-eva="person-outline" data-eva-width="24px" data-eva-height="24px" data-eva-fill="gray"/>
                  </button>
                  <button className={selectedRightButton === "notifications" ? "rightIconButtonSelected": "rightIconButton"}>
                      <i className="rightIcon" data-eva="bell-outline" data-eva-width="24px" data-eva-height="24px" data-eva-fill="gray"/>
                  </button>
                  <Button className={selectedRightButton === "messages" ? "rightIconButtonSelected": "rightIconButton"}
                          handleOnClick={() => toggleHeaderDrawer("messages")}
                          isSelected={selectedRightButton === "messages"}
                          icons={
                              {
                                  isSelected: <i className="rightIcon" data-eva="message-square-outline" data-eva-width="24px" data-eva-height="24px" data-eva-fill="#27a678"/>,
                                  notSelected: <i className="rightIcon" data-eva="message-square-outline" data-eva-width="24px" data-eva-height="24px" data-eva-fill="gray"/>
                              }
                          }>
                  </Button>
              </div>
          </Header>
          <div className="eventsDiv">
              <div className="searchMenu">
                  <div className="searchBarDiv">
                      <button className="filtersButton">
                          <i className="rightIcon" data-eva="funnel-outline" data-eva-width="24px" data-eva-height="24px" data-eva-fill="black"/>
                          Filters
                      </button>
                      <input className="searchBar" type="text" placeholder="Search..."/>
                  </div>
                  <div className="addEventDiv">
                      <button className="addEventButton">
                          <i className="rightIcon" data-eva="plus-circle-outline" data-eva-width="24px" data-eva-height="24px" data-eva-fill="white"/>
                      </button>
                  </div>
              </div>
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

export default Main;