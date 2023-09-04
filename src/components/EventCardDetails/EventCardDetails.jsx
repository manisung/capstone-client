import "./EventCardDetails.scss";
import Button from "../Button/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";



// TODO: make this single event page

function EventCardDetails() {
    const[selectedEvent, setSelectedEvent] = useState({});
    // const { id } = useParams();
    
  
    axios
    .get(
        `http://localhost:${process.env.REACT_APP_PORT}/events/1`
    ).then((response) => {
        setSelectedEvent(response.data);
    })
    .catch((err) => console.error(err));

    return (
        <div>{selectedEvent.event_name}</div>
    )

};

export default EventCardDetails;