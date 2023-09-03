import "./EventCardDetals.scss";
import Button from "../Button/Button";
import axios from "axios";
// import { useState, useEffect } from "react";


// TODO: make this single event page

// function EventCardDetails(props) {

//   console.log(props.events);

//   function handleRegistration(event, eventId) {
//     event.preventDefault();

//     const userId = localStorage.getItem("userId");

//     axios
//       .get(
//         `http://localhost:${process.env.REACT_APP_PORT}/users/${userId}/events/${eventId}`
//       )
//       .then((response) => {
//         // setSelectedUserEvents(response.data);
//         console.log("response", response.data);
//       })
//       .catch((err) => console.error(err));
//   }

//   return (
//     <div>
//       <ul>
//         {props.events?.map((event, index) => {
//           console.log(event.id);
//           return (
//             <li key={event.id}>
//               <div className="event-name-wrapper">
//                 <p>Event Name {event.id}</p>
//                 {/* maybe just event name, when click then show more information, think how this will be better*/}
//                 <p>{event.event_name}</p>
//               </div>

//               <div className="event-description-wrapper">
//                 <p>Event Description</p>
//                 <p>{event.description}</p>
//               </div>

//               <div className="event-status-wrapper">
//                 <p>Event Status</p>
//                 <p>{event.status}</p>
//               </div>

//               <div className="event-location-wrapper">
//                 <p>Event Location</p>
//                 <p>{event.location}</p>
//               </div>

//               <div className="event-date-wrapper">
//                 <p>Event Date</p>
//                 <p>{event.date}</p>
//               </div>

//               <div className="event-deadline-wrapper">
//                 <p>Registration Deadline</p>
//                 <p>{event.deadline}</p>
//               </div>

//               <Button
//                 onClick={(e) => {
//                   handleRegistration(e, event.id);
//                 }}
//                 text="Register"
//               />
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default EventCardDetails;