import React from "react";
import Layout from "./Components/Layout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          {AllRoutes.map((i) => (
            <Route path={i.path} component={i.component} {...i} key={i.path} />
          ))}
          <Redirect from="*" to="/" />
        </Switch>
      </Layout>
    </Router>
  );
}
