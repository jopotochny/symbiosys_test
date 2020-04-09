import React, {useEffect} from 'react';
import '../scss/ConversationCard.scss';
import * as eva from 'eva-icons';
export default function ConversationCard(props){
    /** This component represents a conversation within the messages tabulation. **/
    let {name, date} = props;
    useEffect(() => {
        eva.replace();
    }, []);
    return(
        <div className="conversationCard">
            <div className="conversationIconWrapper">
                <i className="rightIcon" data-eva="person-outline" data-eva-width="20px" data-eva-height="20px" data-eva-fill="#ABABAB"/>
            </div>
            <div className="conversationNameDateWrapper">
                <p className="conversationName">{name}</p>
                <p className="conversationDate">{date}</p>
            </div>
            <div className="conversationArrowWrapper">
                <i className="conversationArrowIcon" data-eva="chevron-right-outline" data-eva-width="20px" data-eva-height="20px" data-eva-fill="#ABABAB"/>
            </div>
        </div>
    );
}