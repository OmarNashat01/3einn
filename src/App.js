import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pades/Home";
import {Switch, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
      <Route path="/" exact>
      <Home/>
      </Route>
      </Switch>
     <Footer/>
    </div>
  );
}

export default App;
