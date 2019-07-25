//  React
import React from 'react'
import { connect } from 'react-redux'

//  Material UI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

//  Components
import DeployProcess from '../components/DeployProcess';


const App = ({actions, children}) => (
  <div>
    <Container fixed>
      <Typography variant="h4" gutterBottom>Sysco Onboard</Typography>
      <Typography variant="h6" gutterBottom>Dette er camunda tasklist laget i react. For å starte en ny prosess i camunda kan du velge filen i filvelgeren under. </Typography>
      <DeployProcess />
    </Container>
  </div>
)

const mapStateToProps = state => ({
})

export default connect(
  mapStateToProps,
)(App)
