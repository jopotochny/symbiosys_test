import React, {useEffect} from 'react';
import * as eva from 'eva-icons';
import '../scss/EventCard.scss';
function EventCard(props) {
    /** This component represents an event, and is displayed when the menu drawer is selected on "Events" **/
    useEffect(() => {
    // add this line
    eva.replace();
}, []);
    let {date, title, location} = props;
    return(
      <div className="eventDiv">
          <div className="cardDiv">
              <div className="dateAndTitleContainer">
                  <p className="dateText">{date}</p>
                  <p className="titleText">{title}</p>
              </div>
              <div className="locationContainer">
                  <p className="locationText">{location}</p>
              </div>
          </div>
          <div>
          <div className="iconDiv">
              <button className="eventButton">
                  <i data-eva="edit-outline"/>
              </button>
              <button className="eventButton">
                  <i data-eva="trash-outline" data-eva-width="20px" data-eva-height="20px"/>
              </button>
          </div>
          </div>
      </div>
    );

}

export default EventCard;