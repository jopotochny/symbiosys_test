import React, {useState} from 'react';
import Header from '../components/Header';
import EventCard from '../components/EventCard';
import Button from '../components/Button';
import Tabulation from '../components/Tabulation';
import {Drawer, makeStyles} from '@material-ui/core';
import '../scss/Main.scss';
function Main(props){
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        headerDrawer: {
            marginTop: "100px",
            border: "#E4E4E4 8px solid"
        }}));
    const classes = useStyles();

    let [menuDrawerVisible, setMenuDrawerVisible] = useState(false);
    let [headerDrawerVisible, setHeaderDrawerVisible] = useState(false);
    let [selectedRightButton, setSelectedRightButton] = useState("none");
    let [selectedMenuButton, setSelectedMenuButton] = useState("none");


    let toggleMenuDrawer = () => {
        setMenuDrawerVisible(!menuDrawerVisible);
    };
    let toggleHeaderDrawer = (button) => {
      setHeaderDrawerVisible(!headerDrawerVisible);
      selectedRightButton === button ? setSelectedRightButton("none") : setSelectedRightButton(button);
    };
    return(
        <div>
            <Header className={"header" + ( menuDrawerVisible ? " headerShiftRight" : "")}>
                <div className="menuIconDiv">
                    <button className="menuIconButton" onClick={() => toggleMenuDrawer()}>
                        <i className="menuIcon" data-eva="menu-arrow-outline" data-eva-width="24px" data-eva-height="24px" data-eva-fill="#ABABAB"/>
                    </button>
                </div>
                <div className="rightIconsDiv">
                    <button className={selectedRightButton === "friends" ? "rightIconButtonSelected": "rightIconButton"}>
                        <i className="rightIcon" data-eva="person-outline" data-eva-width="24px" data-eva-height="24px" data-eva-fill="#ABABAB"/>
                    </button>
                    <button className={selectedRightButton === "notifications" ? "rightIconButtonSelected": "rightIconButton"}>
                        <i className="rightIcon" data-eva="bell-outline" data-eva-width="24px" data-eva-height="24px" data-eva-fill="#ABABAB"/>
                    </button>
                    <Button className={selectedRightButton === "messages" ? "rightIconButtonSelected": "rightIconButton"}
                            handleOnClick={() => toggleHeaderDrawer("messages")}
                            isSelected={selectedRightButton === "messages"}
                            icons={
                                {
                                    isSelected: <i className="rightIcon" data-eva="message-square-outline" data-eva-width="24px" data-eva-height="24px" data-eva-fill="#27a678"/>,
                                    notSelected: <i className="rightIcon" data-eva="message-square-outline" data-eva-width="24px" data-eva-height="24px" data-eva-fill="#ABABAB"/>
                                }
                            }>
                    </Button>
                </div>
            </Header>
      <div className={(menuDrawerVisible ? "mainDivShiftLeft" : "mainDiv") + (headerDrawerVisible ? " mainDivShiftRight" : "")}>

          <Drawer anchor="left" variant="persistent" open={menuDrawerVisible}>
              <div className="menuDrawer">
                  <img className="logoImage" src={"/logo.svg"}/>
                  <button className={selectedMenuButton === "dashboard" ? "menuButtonSelected" : "menuButton"} onClick={() => setSelectedMenuButton("dashboard")}>
                      <i className="menuIcon" data-eva="layout-outline" data-eva-width="24px" data-eva-height="24px" data-eva-fill="#ABABAB"/>
                      <p className="menuText">Dashboard</p>
                  </button>
                  <button className={selectedMenuButton === "statistics" ? "menuButtonSelected" : "menuButton"} onClick={() => setSelectedMenuButton("statistics")}>
                      <i className="menuIcon" data-eva="trending-up-outline" data-eva-width="24px" data-eva-height="24px" data-eva-fill="#ABABAB"/>
                      <p className="menuText">Statistics</p>
                  </button>
                  <button className={selectedMenuButton === "documents" ? "menuButtonSelected" : "menuButton"} onClick={() => setSelectedMenuButton("documents")}>
                      <i className="menuIcon" data-eva="folder-outline" data-eva-width="24px" data-eva-height="24px" data-eva-fill="#ABABAB"/>
                      <p className="menuText">Documents</p>
                  </button>
                  <button className={selectedMenuButton === "media" ? "menuButtonSelected" : "menuButton"} onClick={() => setSelectedMenuButton("media")}>
                      <i className="menuIcon" data-eva="image-outline" data-eva-width="24px" data-eva-height="24px" data-eva-fill="#ABABAB"/>
                      <p className="menuText">Media</p>
                  </button>
                  <button className={selectedMenuButton === "events" ? "menuButtonSelected" : "menuButton"} onClick={() => setSelectedMenuButton("events")}>
                      <i className="menuIcon" data-eva="calendar-outline" data-eva-width="24px" data-eva-height="24px" data-eva-fill="#ABABAB"/>
                      <p className="menuText">Events</p>
                  </button>
              </div>
          </Drawer>
          <Drawer  classes={{paper: "headerDrawer"}} anchor="right" variant="persistent" open={headerDrawerVisible} elevation="0">
              <div className="headerDrawerDiv">
                  <Tabulation/>
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
              <div >
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