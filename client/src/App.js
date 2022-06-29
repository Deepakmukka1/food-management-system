import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Food from "./Components/UserRequest";
import Navbar from "./Components/UserRequest/Navbar";
import Adminabsence from "./Components/AdminAbsenceView/AdminAbsenceView";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Signup} />
          <Route exact path="/userfood" component={Food}/>
          <Route exact path="/AdminAbsenceView" component={Adminabsence}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
