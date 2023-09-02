import "./UserEventsList.scss";

function UserEventsList(props) {
  return (
    <div>
      <ul>
        {props.selectedUserEvents?.map((selectedUserEvent) => {
          return (
            <li key={selectedUserEvent.id}>
              <p>Event Name {selectedUserEvent.id}</p>
              {/* maybe just event name, when click then show more information, think how this will be better*/}
              <p>{selectedUserEvent.event_name}</p>
              <p>Event Description</p>
              <p>{selectedUserEvent.description}</p>
              <p>Event Status</p>
              <p>{selectedUserEvent.status}</p>
              <p>Event Location</p>
              <p>{selectedUserEvent.location}</p>
              <p>Event Date</p>
              <p>{selectedUserEvent.date}</p>
              <p>Registration Deadline</p>
              <p>{selectedUserEvent.deadline}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UserEventsList;
