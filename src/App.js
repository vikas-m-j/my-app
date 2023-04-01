import "./App.css";
import Logo from "./components/Logo";
import OneLineDescription from "./components/OneLineDescription";
import UserEmail from "./components/UserEmail";
import UserPreference from "./components/UserPreference";

const App = () => {
  return (
    <div classNameName="App">
      <div classNameName="container text-center">
        <Logo />
        <OneLineDescription />
        <div className="row">
          <UserEmail />
          <UserPreference />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button type="button" class="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
