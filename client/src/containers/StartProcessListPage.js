import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Container, Header } from "semantic-ui-react";
import BPMNDiagram from "../components/BPMNDiagram";
import List from "../components/List";
import { loadProcessDefinitionsWithXML } from "../actions";
import Typography from "@material-ui/core/Typography";
//  Components
import DeployProcess from "../components/DeployProcess";
import { Redirect } from "react-router-dom";

class StartProcessListPage extends Component {
  componentWillMount() {
    this.props.loadProcessDefinitionsWithXML();
  }

  renderProcess(process) {
    return (
      <li key={process.id}>
        <Link to={`/startProcess/key/${process.key}`}>
          {process.name} - Version {process.version}
        </Link>
        <BPMNDiagram xml={process.xml} />
      </li>
    );
  }

  render() {
    const { processDefinition, processDefinitionXML } = this.props;
      if (!processDefinition) {
        return (
          <div>
            <p>Laster prosess definisjoner ... </p>
          </div>
        );
      } else {
        Object.keys(processDefinition).forEach(id => {
          if (processDefinitionXML && processDefinitionXML[id]) {
            processDefinition[id].xml = processDefinitionXML[id].bpmn20Xml;
          }
        });
      }
      return (
        <Container text>
          <Typography variant="h4" gutterBottom>
            Sysco Onboard
          </Typography>
          <Typography variant="h6" gutterBottom>
            For å starte en ny prosess i camunda kan du velge filen i
            filvelgeren under.{" "}
          </Typography>
          <DeployProcess />
          <Header as="h2">Eller velg en av prosessene her</Header>
          <List
            renderItem={this.renderProcess}
            items={processDefinition}
            loadingLabel={`Laster prosess definisjoner ... `}
          />
        </Container>
      );
  }
}
const mapStateToProps = (state, ownProps) => {
  const params = ownProps.match.params;
  return {
    ...params,
    ...state.entities
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      loadProcessDefinitionsWithXML
    }
  )(StartProcessListPage)
);
