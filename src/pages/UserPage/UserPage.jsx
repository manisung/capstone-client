import "./UserPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import UserInfoCard from "../../components/UserInfoCard/UserInfoCard";
import UserEventsList from "../../components/UserEventsList/UserEventsList";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

let PORT;

console.log('NODE_ENV', process.env.NODE_ENV)

if(process.env.NODE_ENV === 'production'){
    PORT = '';
} else {
    PORT = `:${process.env.REACT_APP_PORT}`;
}


function UserPage() {

  const navigate = useNavigate();
  // const { id } = useParams();

  function handleSignOut() {
    // localStorage.setItem("userId", 1);
    localStorage.removeItem('userId');

    navigate("/login");
    // if here needs to be Dynamic, how? now is just faking it
  }

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
              `${process.env.REACT_APP_API_URL}${PORT}/users/${userId}`
            )
            .then((response) => {   
                setSelectedUser(response.data);
            }) 
            .catch((err) => console.error(err));

            axios
            .get(
              `${process.env.REACT_APP_API_URL}${PORT}/users/${userId}/events`
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
        <div className="userpage">
          <div className="userpage__title">User Information</div>
          {loggedIn ? <p className="userpage__loginstatus">Welcome Back, {selectedUser.name}!</p> : <p>Please Log In!</p>}
          <Button className="button-signout" onClick={handleSignOut} text="Sign Out" />
            <UserInfoCard selectedUser={selectedUser} />
            <div className="userpage__event-registered">Events Registered</div>
            <UserEventsList selectedUserEvents={selectedUserEvents} />
            <div className="userpage__event-more" >Discouver More Event</div>
        </div>
    )
}

export default UserPage;