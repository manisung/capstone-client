import EventsList from "../../components/EventsList/EventsList";
import { useState, useEffect } from "react";
import axios from "axios";
import "./EventsPage.scss";


let PORT;

console.log('NODE_ENV', process.env.NODE_ENV)

if(process.env.NODE_ENV === 'production'){
    PORT = '';
} else {
    PORT = `:${process.env.REACT_APP_PORT}`;
}

function EventsPage() {
    const[events, setEvents] = useState ([]);
    const[userEvents, setUserEvents] = useState ([]);


    console.log("events", events);
    const userId = localStorage.getItem("userId");

    function getEvents () {
        axios
        .get(
          `${process.env.REACT_APP_API_URL}${PORT}/events`
        )
        .then((response) => {   
            setEvents(response.data);
        }) 
        .catch((err) => console.error(err));
    }

    function getUserEvents() {
        axios
              .get(
                `${process.env.REACT_APP_API_URL}${PORT}/users/${userId}/events`
              )
              .then((response) => { 
                const userEventsId = response.data.map((event) => event.id);
                setUserEvents(userEventsId);  

                  
              }) 
              .catch((err) => console.error(err));
    }

    useEffect(() => {
          getEvents();
          getUserEvents();
        }, []);

       
    return (
        <div className="eventpage">
        <div className="eventpage__title">Events</div>
        <EventsList getUserEvents={getUserEvents} events={events} userEvents={userEvents}/>
        </div>
    )
}

export default EventsPage;