import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { Container, Header } from 'semantic-ui-react'
import BPMNDiagram from '../components/BPMNDiagram'
import List from '../components/List'
import { loadProcessDefinitionsWithXML } from '../actions'

class StartProcessListPage extends Component {
  componentWillMount() {
    this.props.loadProcessDefinitionsWithXML();
  }

  renderProcess(process) {
    return <li key={process.id}>
      <Link to={`/startProcess/key/${process.key}`}>{process.name} - Version {process.version}</Link>
      <BPMNDiagram xml={process.xml}></BPMNDiagram>
    </li>
  }

  render() {
    console.log(this.props)
    const { processDefinition, processDefinitionXML } = this.props

    if (!processDefinition) {
      return (
        <div><p>Laster prosess definisjoner ... </p></div>
      )
    } else {
      Object.keys(processDefinition).forEach((id) => {
        if (processDefinitionXML && processDefinitionXML[id]) {
          processDefinition[id].xml = processDefinitionXML[id].bpmn20Xml
        }
      })

      return (
        <Container text>
          <Header as='h2'>Hvilken prosess vil du starte?</Header>
          <List renderItem={this.renderProcess}
            items={processDefinition}
            loadingLabel={`Laster prosess definisjoner ... `}
            />
        </Container>
      )
    }
  }

}
const mapStateToProps = (state, ownProps) => {
  const params = ownProps.match.params
  return {
    ...params,
    ...state.entities
  }
}

export default withRouter(connect(mapStateToProps, {
  loadProcessDefinitionsWithXML
})(StartProcessListPage))
