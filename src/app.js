/*eslint-disable */
const React = require('react');
/*eslint-enable */
const ReactDOM = require('react-dom');
const StormApp = require('./components/StormApp.react');
const LandingPage     = require('./components/LandingPage.react');
const ReactRouter     = require('react-router');
const Router          = ReactRouter.Router;
const Route           = ReactRouter.Route;
const Link            = ReactRouter.Link;

window.onload = function() {
  const body = document.querySelector('#app_space');
  // ReactDOM.render(<StormApp />, body);
  ReactDOM.render((
  <Router>
    <Route path="/" component={LandingPage}/>
    <Route path="workSpace" component={StormApp}/>
  </Router>
), body);
};
