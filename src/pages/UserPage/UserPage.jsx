import "./UserPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import UserInfoCard from "../../components/UserInfoCard/UserInfoCard";
import UserEventsList from "../../components/UserEventsList/UserEventsList";

function UserPage() {

    const[selectedUser, setSelectedUser] = useState ({});
    const[selectedUserEvents, setSelectedUserEvents] = useState ([]);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
          axios
            .get(
              `http://localhost:${process.env.REACT_APP_PORT}/users/${id}`
            )
            .then((response) => {   
                setSelectedUser(response.data);
            }) 
            .catch((err) => console.error(err));
        }
      }, [id]);

      useEffect(() => {
        if (id) {
          axios
            .get(
              `http://localhost:${process.env.REACT_APP_PORT}/users/${id}/events`
            )
            .then((response) => {
              setSelectedUserEvents(response.data);
            })
            .catch((err) => console.error(err));
        }
      }, [id]);

      console.log("selected user events", selectedUserEvents);

    return(
        <div>
            <UserInfoCard selectedUser={selectedUser} />
            <UserEventsList selectedUserEvents={selectedUserEvents} />
        </div>
    )
}

export default UserPage;