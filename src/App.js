import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Auth } from "./Components/Auth";
function App() {
  const url =
    "https://api.instagram.com/oauth/authorize?client_id=626807078280160&redirect_uri=https://master.d2fobv91sb7b4f.amplifyapp.com/auth&scope=user_profile,user_media&response_type=code";
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/" exact>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      <a href={url}>Instagram</a>
    </div>
  );
}

export default App;
