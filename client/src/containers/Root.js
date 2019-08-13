import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import App from './App';
import StartProcessPage from './StartProcessPage';
import StartProcessListPage from './StartProcessListPage';
import TasklistPage from './TasklistPage';
import Header from '../components/Header';
import TaskFromEmail from './TaskFromEmail';
import FormSubmitted from './../components/FormSubmitted';
import EmployeTable from './../components/EmployeTable';
import LoginPage from '../components/LoginPage';
import { PrivateRoute } from './PrivateRoute';


const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Header/>
      <PrivateRoute path="/" component={App} exact/>
      <PrivateRoute path="/startprocess/key/:process" component={StartProcessPage}/>
      <PrivateRoute path="/startprocess/list" component={StartProcessListPage}/>
      <PrivateRoute path="/tasklist" component={TasklistPage} exact/>
      <PrivateRoute path="/tasklist/:processDefinitionId/:taskId" component={TasklistPage}/>
      <PrivateRoute path="/formSubmitted" component={FormSubmitted} />
      <PrivateRoute path="/employeTable" component={EmployeTable} />
      <Route path="/email/:processDefinitionId/:taskId" component={TaskFromEmail} />
      <Route path="/login" component={LoginPage} />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}
export default Root
