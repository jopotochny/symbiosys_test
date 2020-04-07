import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../components/TabPanel';
import ConversationCard from '../components/ConversationCard';
import {withStyles} from '@material-ui/core'
import '../scss/Tabulation.scss'
function Tabulation(props){

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const StyledTabs = withStyles({
        indicator: {
            backgroundColor: "#27A678",
            height: "4px"
        }
    })(Tabs);
    const StyledTab = withStyles({
        textColorPrimary:{
            color: "#ABABAB"
        },
        wrapper:{
            fontWeight: "bolder",
            textTransform: "none"
        },
        selected: "selectedTab",
        root: {
            height: "80px",
        },
        flexContainer: {
            border: "#E4E4E4 2px solid"

        }
    })(Tab);
    return (
        <Paper square>
            <StyledTabs
                value={value}
                onChange={handleChange}
            >
                <StyledTab label="Recent"/>
                <StyledTab label="Archived"/>
            </StyledTabs>
            <TabPanel value={value} index={0}>
                <div className="conversationsContainer">
                        <div className="conversationList">
                            <ConversationCard name="Phillip Saunders" date="29 Jul 2019 03:16PM"/>
                        </div>
                        <div className="addConversationButtonWrapper">
                            <button className="addConversationButton">
                                <i className="addConversationIcon" data-eva="plus-circle-outline" data-eva-width="24px" data-eva-height="24px" data-eva-fill="white"/>
                                <p>Create a conversation</p>
                            </button>
                        </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}></TabPanel>

        </Paper>
    );
}

export default Tabulation;