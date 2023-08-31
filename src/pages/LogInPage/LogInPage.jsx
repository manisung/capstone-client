import "./LogInPage.scss";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";


function LogInPage() {

  const navigate = useNavigate();

  function handleSignIn() {
      navigate("/users/1");
      // if here needs to be Dynamic, how? now is just faking it
  }

  function handleBackToMember() {
    navigate("/members");
  }
  

    return(
        <div>
        <div>Log in to your account</div>
        <form>
        <div className="">
              <label
                className=""
                htmlFor="email"
              >
                Email
              </label>
              <input
                className=""
                type="text"
                id="email"
                name="email"
                placeholder="Email"
              />
               <label
                className=""
                htmlFor="password"
              >
                Password
              </label>
              <input
                className=""
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <Button onClick={handleSignIn} text="Sign In" />
              {/* click sign in just fake to a user page */}
              <Button onClick={handleBackToMember} text="Back" />
              <div>Forgot your password?</div>
            </div>
        </form>
        </div>
    )
}

export default LogInPage;