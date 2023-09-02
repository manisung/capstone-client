import "./UserPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import UserInfoCard from "../../components/UserInfoCard/UserInfoCard";
import UserEventsList from "../../components/UserEventsList/UserEventsList";

function UserPage() {

    const[selectedUser, setSelectedUser] = useState ({});
    const[selectedUserEvents, setSelectedUserEvents] = useState ([]);
    const [loggedIn, setLoggedIn ] = useState(false)
    // const { id } = useParams();

    useEffect(() => {
      const userId = localStorage.getItem("userId")
      if (userId) {
        setLoggedIn(true);
      }

      console.log("userId", userId);
        if (userId) {
          axios
            .get(
              `http://localhost:${process.env.REACT_APP_PORT}/users/${userId}`
            )
            .then((response) => {   
                setSelectedUser(response.data);
            }) 
            .catch((err) => console.error(err));

            axios
            .get(
              `http://localhost:${process.env.REACT_APP_PORT}/users/${userId}/events`
            )
            .then((response) => {
              setSelectedUserEvents(response.data);
              console.log("response.data",response.data);
            })
            .catch((err) => console.error(err));
        }
      }, []);


      console.log("selected user events", selectedUserEvents);

    return(
        <div>
          {loggedIn ? <p>I'm logged in!</p> : <p>I'm not logged in!!</p>}
            <UserInfoCard selectedUser={selectedUser} />
            <UserEventsList selectedUserEvents={selectedUserEvents} />
        </div>
    )
}

export default UserPage;