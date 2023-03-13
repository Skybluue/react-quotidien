import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import allLocales from '@fullcalendar/core/locales-all'
import {api} from "../api";
//import {setEventsCalendar} from '../functions/calendarFunctions'

class Calendar extends React.Component {

    state={
        "evenements":[]
    }
    

render() {
    //var eventsCalendar = setEventsCalendar(this.state.evenements);
    return (
        <FullCalendar
            locales={allLocales}
            locale={'fr'}
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            //eventContent={renderEventContent()}
            //events={}
        />
    )
}
async componentDidMount() {
    const evenements = await api.getEvenements();
    this.setState({evenements});
    console.log("test");
    console.log(evenements["0"].titre);
}


}

export default Calendar;