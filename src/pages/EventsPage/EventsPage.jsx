import EventsList from "../../components/EventsList/EventsList";
import { useState, useEffect } from "react";
import axios from "axios";
import "./EventsPage.scss";

function EventsPage() {
    const[events, setEvents] = useState ([]);

    console.log("events", events);

    useEffect(() => {
          axios
            .get(
              `http://localhost:${process.env.REACT_APP_PORT}/events`
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