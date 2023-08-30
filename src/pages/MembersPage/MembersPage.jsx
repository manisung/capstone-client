import "./MembersPage.scss";
import Button from "../../components/Button/Button";

function MembersPage() {
  return (
    <div className="">
      <div>{/* need to add a pic */}</div>
      <div>
        <div>Becaome a member</div>
        <Button text="Join Now!" />
      </div>
      <div>
        <div>Already a member?</div>
        <Button text="Log In" />
      </div>
    </div>
  );
}

export default MembersPage;
