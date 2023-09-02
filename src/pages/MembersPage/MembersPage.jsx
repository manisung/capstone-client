import "./MembersPage.scss";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

function MembersPage() {

    const navigate = useNavigate();

function handleLogIn() {
    navigate("/login");
}

  return (
    <div className="memberpage">
      <div>{/* need to add a pic */}</div>
      <div className="memberpage__sub-wrapper">
      <div className="memberpage__join">
        <div className="memberpage__join-text">Become a member</div>
        <Button text="Join Now!" />
      </div>
      <div className="memberpage__signin">
        <div className="memberpage__signin-text">Already a member?</div>
        <Button onClick={handleLogIn} text="Log In" />
      </div>
      </div>
    </div>
  );
}

export default MembersPage;