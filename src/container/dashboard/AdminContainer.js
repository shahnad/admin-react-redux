import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from 'redux'
import * as  UserService from '../../services/user';
import Loader from '../../components/Loader';

const Home = React.lazy(() => import('./components/Home'));
const Settings = React.lazy(() => import('./components/Settings'));
const Dashboard = React.lazy(() => import('../dashboard/components'));
const NotFound = React.lazy(() => import('../../components/NotFound'));

const AdminContainer = (props) => {
  // const auth = useSelector(state => state.auth.authenticated)
  const auth = true
  return (
    <Suspense fallback={<Loader />}>
      <Dashboard>
        <Switch>
          <Route
            exact
            path={`${props.match.path}`}
            render={() => auth ? <Home {...props} /> : ''}
          />

          <Route
            exact
            path={`${props.match.path}/settings`}
            render={() => auth ? <Settings {...props} /> : ''}
          />


          <Route
            exact
            path={`${props.match.path}/*`}
            render={() => <NotFound {...props} />} />


        </Switch>
      </Dashboard>
    </Suspense>
  )
}

function mapStateToProps(state) {

  return {
    userauth: state?.auth,
    users: state?.users

  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(Object.assign({}, UserService), dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
