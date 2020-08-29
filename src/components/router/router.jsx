/* eslint-disable import/extensions */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Page from '../page/page.jsx';


class Router extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <main>
          {/* <header><Header /></header> */}
          <Route exact path="/" component={Page} />
          {/* <Route path="/drawing" component={Page} />
          <Footer /> */}
        </main>
      </BrowserRouter>
    );
  }
}

export default Router;
