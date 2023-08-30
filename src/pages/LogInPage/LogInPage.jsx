import "./LogInPage.scss";
import Button from "../../components/Button/Button";

function LogInPage() {
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
              <Button text="Sign In" />
              {/* click sign in just fake to a user page */}
              <Button text="Back" />
              <div>Forgot your password?</div>
            </div>
        </form>
        </div>
    )
}

export default LogInPage;