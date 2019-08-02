//  React
import React from 'react'
import { connect } from 'react-redux'

//  Material UI
import Container from '@material-ui/core/Container';
import Login from './Login'


const App = ({actions, children}) => (
  <div>
    <Container fixed>
     <Login />
    </Container>
  </div>
)

const mapStateToProps = state => ({
})

export default connect(
  mapStateToProps,
)(App)
