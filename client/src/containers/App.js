//  React
import React from 'react'
import { connect } from 'react-redux'

//  Material UI
import Container from '@material-ui/core/Container';
import StartProcessPage from './StartProcessListPage';


const App = ({actions, children}) => (
  <div>
    <Container fixed>
     <StartProcessPage />
    </Container>
  </div>
)

const mapStateToProps = state => ({
})

export default connect(
  mapStateToProps,
)(App)
