import Button from "../Button/Button";
import "./UserEventsList.scss";

function UserEventsList(props) {
  return (
    <div>
      <ul>
        {props.selectedUserEvents?.map((selectedUserEvent) => {
          return (
            <li className="usereventslist" key={selectedUserEvent.id}>
              <div className="usereventslist__eventname-wrapper">
              <p className="usereventslist__eventname-title">Name:</p>
              {/* maybe just event name, when click then show more information, think how this will be better*/}
              <p>{selectedUserEvent.event_name}</p>
              </div>
              <div className="usereventslist__eventlocation-wrapper">
              <p className="usereventslist__eventlocation-title">Location:</p>
              <p>{selectedUserEvent.location}</p>
              </div>
              <div className="usereventslist__eventdate-wrapper">
              <p className="usereventslist__eventdate-title">Date:</p>
              <p>{selectedUserEvent.date}</p>
              </div>
              <Button onClick="" text="Cancel Registration" className="button-cancelregistration"/>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UserEventsList;
