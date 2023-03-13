import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import allLocales from '@fullcalendar/core/locales-all'
import {api} from "../api";

var eventsCalendar = [];
class Calendar extends React.Component {

    state={
        "evenements":[]
    }
    
render() {
    return (
        <FullCalendar
            locales={allLocales}
            locale={'fr'}
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={eventsCalendar}
            eventClick={function (info) {
                alert("Lieu: " + info.event.extendedProps.lieu + "\n" + "Description: " + info.event.extendedProps.description);
            }}
        />
    )
}
async componentDidMount() {
    const evenements = await api.getEvenements();
    this.setState({evenements});
    eventsCalendar = [];
    evenements.map((evenement) => {
        eventsCalendar.push(
            {
            title: evenement.titre,
            date: evenement.date,
            id: evenement.id,
            extendedProps: {
                description: evenement.description != "" ? evenement.description : "Aucune description",
                lieu: evenement.lieu != "" ? evenement.lieu : "Aucun lieu"
            }
            }
        );
    })
}


}

export default Calendar;