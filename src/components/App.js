import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { I18nextProvider } from "react-i18next";

/* Custom components */
import HomePage from "./pages/HomePage/HomePage";
import { Particles } from "./shared/Particles";
import { Main } from "../styles/AppStyles";
import Header from "./shared/Header";

/* Config */
import i18nConfig from "../i18nConfig";

class App extends Component {
  render() {
    return (
      <I18nextProvider i18n={i18nConfig}>
        <Router>
          <div className="App">
            <Particles />
            <Main>
              <Header title="DevCore" />
              <Switch>
                <Route exact strict path="/" component={HomePage} />
              </Switch>
            </Main>
          </div>
        </Router>
      </I18nextProvider>
    );
  }
}

export default App;
