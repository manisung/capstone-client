import "./MembersPage.scss";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

function MembersPage() {

    const navigate = useNavigate();

function handleLogIn() {
    navigate("/login");
}

  return (
    <div className="">
      <div>{/* need to add a pic */}</div>
      <div>
        <div>Becaome a member</div>
        <Button text="Join Now!" />
      </div>
      <div>
        <div>Already a member?</div>
        <Button onClick={handleLogIn} text="Log In" />
      </div>
    </div>
  );
}

export default MembersPage;