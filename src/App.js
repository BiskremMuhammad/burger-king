import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './Layout';

// import pages
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder';
import Orders from './components/Orders/Orders';
import NotFound from './components/notFound';

const App = (props) => (
  <div className="App">
    <Layout title={props.title}>
      <Switch>
        <Route path="/orders" component={Orders} />
        <Route path="/" exact component={() => (
          <BurgerBuilder />
        )} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </div>
);

const mapStateToProps = state => {
  return {
    title: state.title
  };
}
export default withRouter(connect(mapStateToProps)(App));
