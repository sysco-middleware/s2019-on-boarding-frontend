import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import App from './App'
import StartProcessPage from './StartProcessPage'
import StartProcessListPage from './StartProcessListPage'
import TasklistPage from './TasklistPage'
import Header from '../components/Header'
import TaskFromEmail from './TaskFromEmail';
import FormSubmitted from './../components/FormSubmitted';
import EmployeTable from './../components/EmployeTable';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Header/>
      <Route path="/" component={App} exact/>
      <Route path="/startprocess/key/:process" component={StartProcessPage}/>
      <Route path="/startprocess/list" component={StartProcessListPage}/>
      <Route path="/tasklist" component={TasklistPage} exact/>
      <Route path="/tasklist/:processDefinitionId/:taskId" component={TasklistPage}/>
      <Route path="/email/:processDefinitionId/:taskId" component={TaskFromEmail} />
      <Route path="/formSubmitted" component={FormSubmitted} />
      <Route path="/employeTable" component={EmployeTable} />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}
export default Root
