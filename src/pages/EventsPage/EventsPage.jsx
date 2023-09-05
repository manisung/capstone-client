import EventsList from "../../components/EventsList/EventsList";
import { useState, useEffect } from "react";
import axios from "axios";
import "./EventsPage.scss";

let PORT;

if(process.env.NODE_ENV === 'production'){
    PORT = '';
} {
    `:${process.env.REACT_APP_PORT}`;
}

function EventsPage() {
    const[events, setEvents] = useState ([]);

    console.log("events", events);

    useEffect(() => {
          axios
            .get(
              `${process.env.REACT_APP_API_URL}${PORT}/events`
            )
            .then((response) => {   
                setEvents(response.data);
            }) 
            .catch((err) => console.error(err));
        }, []);

    return (
        <div className="eventpage">
        <div className="eventpage__title">Events</div>
        <EventsList events={events}/>
        </div>
    )
}

export default EventsPage;