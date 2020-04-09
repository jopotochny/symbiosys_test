import React, {useState} from 'react';
import Header from '../components/Header';
import EventCard from '../components/EventCard';
import Tabulation from '../components/Tabulation';
import {Drawer} from '@material-ui/core';
import '../scss/Main.scss';
function Main(props){


    let [menuDrawerVisible, setMenuDrawerVisible] = useState(false);
    let [headerDrawerVisible, setHeaderDrawerVisible] = useState(false);
    let [selectedRightButton, setSelectedRightButton] = useState("none");
    let [selectedMenuButton, setSelectedMenuButton] = useState("none");


    let toggleMenuDrawer = () => {
        setMenuDrawerVisible(!menuDrawerVisible);
    };
    let toggleHeaderDrawer = (button) => {
        if(button === selectedRightButton){
            // close the drawer as we are clicking the button that opened it
            setHeaderDrawerVisible(false);
            setSelectedRightButton("none");
        }
        else{
            setSelectedRightButton(button);
            setHeaderDrawerVisible(true);
        }
    };
    return(
        <div>
            <Header className={"header" + ( menuDrawerVisible ? " headerShiftRight" : "")}>
                <div className="menuIconDiv">
                    <button className="menuIconButton" onClick={() => toggleMenuDrawer()}>
                        <i className="menuOpenIcon" data-eva="menu-arrow-outline" data-eva-width="24px" data-eva-height="24px" data-eva-fill="#ABABAB"/>
                    </button>
                </div>
                <div className="rightIconsDiv">
                    <button className={selectedRightButton === "friends" ? "rightIconButtonSelected": "rightIconButton"} onClick={() => toggleHeaderDrawer("friends")}>
                        <img className={selectedRightButton === "friends" ? "rightIconGreen" : "rightIcon"} src={process.env.PUBLIC_URL + "/person-outline-gray.svg"} alt=""/>
                    </button>
                    <button className={selectedRightButton === "notifications" ? "rightIconButtonSelected": "rightIconButton"} onClick={() => toggleHeaderDrawer("notifications")}>
                        <img className={selectedRightButton === "notifications" ? "rightIconGreen" : "rightIcon"} src={process.env.PUBLIC_URL + "/bell-outline-gray.svg"} alt=""/>
                    </button>
                    <button className={selectedRightButton === "messages" ? "rightIconButtonSelected": "rightIconButton"} onClick={() => toggleHeaderDrawer("messages")}>
                        <img className={selectedRightButton === "messages" ? "rightIconGreen" : "rightIcon"} src={process.env.PUBLIC_URL + "/message-square-outline-gray.svg"} alt=""/>
                    </button>
                </div>
            </Header>
      <div className={(menuDrawerVisible ? "mainDivShiftLeft" : "mainDiv") + (headerDrawerVisible ? " mainDivShiftRight" : "")}>

          <Drawer anchor="left" variant="persistent" open={menuDrawerVisible}>
              <div className="menuDrawer">
                  <div>
                  <img className="logoImage" src={"/logo.svg"} alt=""/>
                  <button className={selectedMenuButton === "dashboard" ? "menuButtonSelected" : "menuButton"} onClick={() => setSelectedMenuButton("dashboard")}>
                      <img className={selectedMenuButton === "dashboard" ? "menuIconYellow" : "menuIcon"} src={process.env.PUBLIC_URL + "/layout-outline-gray.svg"} alt=""/>

                      <p className="menuText">Dashboard</p>
                  </button>
                  <button className={selectedMenuButton === "statistics" ? "menuButtonSelected" : "menuButton"} onClick={() => setSelectedMenuButton("statistics")}>
                      <img className={selectedMenuButton === "statistics" ? "menuIconYellow" : "menuIcon"} src={process.env.PUBLIC_URL + "/trending-up-outline-gray.svg"} alt=""/>
                      <p className="menuText">Statistics</p>
                  </button>
                  <button className={selectedMenuButton === "documents" ? "menuButtonSelected" : "menuButton"} onClick={() => setSelectedMenuButton("documents")}>
                      <img className={selectedMenuButton === "documents" ? "menuIconYellow" : "menuIcon"} src={process.env.PUBLIC_URL + "/folder-outline-gray.svg"} alt=""/>
                      <p className="menuText">Documents</p>
                  </button>
                  <button className={selectedMenuButton === "media" ? "menuButtonSelected" : "menuButton"} onClick={() => setSelectedMenuButton("media")}>
                      <img className={selectedMenuButton === "media" ? "menuIconYellow" : "menuIcon"} src={process.env.PUBLIC_URL + "/image-outline-gray.svg"} alt=""/>
                      <p className="menuText">Media</p>
                  </button>
                  <button className={selectedMenuButton === "events" ? "menuButtonSelected" : "menuButton"} onClick={() => setSelectedMenuButton("events")}>
                      <img className={selectedMenuButton === "events" ? "menuIconYellow" : "menuIcon"} src={process.env.PUBLIC_URL + "/calendar-outline-gray.svg"} alt=""/>
                      <p className="menuText">Events</p>
                  </button>
                  </div>
                  <div className="logoutDiv">
                      <button className="logoutButton">
                          <img className="menuIcon" src={process.env.PUBLIC_URL + "/power-outline-gray.svg"} alt=""/>
                          <p className="logoutText">Logout</p>
                      </button>
                  </div>
              </div>
          </Drawer>
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
                  <Drawer  classes={{root: "headerDrawerRoot", paper: "headerDrawer"}} anchor="right" variant="persistent" open={headerDrawerVisible} elevation={0}>
                      <div className="headerDrawerDiv">
                          { selectedRightButton === "messages" ? <Tabulation/> : null}
                      </div>
                  </Drawer>
              <div>
                  <div className="searchResults">
                      {selectedMenuButton === "events" ? [<EventCard date="19 Sept 2019" title="Get Best Site Advertiser In Your Side Pocket" location="Deonmouth"/>,
                          <EventCard date="19 Sept 2019" title="Get Best Site Advertiser In Your Side Pocket" location="Deonmouth"/>,
                          <EventCard date="19 Sept 2019" title="3 Smart Reasons Why You Should Consider Paying For Your Traffic. Here is a longer title." location="Deonmouth"/>,
                          <EventCard date="19 Sept 2019" title="Get Best Site Advertiser In Your Side Pocket" location="Deonmouth"/>,
                          <EventCard date="19 Sept 2019" title="Get Best Site Advertiser In Your Side Pocket" location="Deonmouth"/>] : null}

                  </div>
              </div>
          </div>
      </div>
        </div>
    );
}

export default Main;