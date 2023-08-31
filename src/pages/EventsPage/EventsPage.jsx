import EventsList from "../../components/EventsList/EventsList";
import { useState, useEffect } from "react";
import axios from "axios";
import "./EventsPage.scss";

function EventsPage() {
    const[events, setEvents] = useState ([]);

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
        <EventsList events={events}/>
    )
}

export default EventsPage;