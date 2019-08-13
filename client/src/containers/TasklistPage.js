//  React
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'

//  Material UI
import { Grid } from "semantic-ui-react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import Container from "@material-ui/core/Container";

//  Components
import { loadTasks } from "../actions";
import Taskform from "../components/Taskform";
import sortBy from "lodash/sortBy";

class TasklistPage extends Component {
  componentWillMount() {
    this.props.loadTasks();
  }

  renderItem(task) {
    return (
      <Link
        onClick={this.forceUpdate}
        to={`/tasklist/${task.processDefinitionId}/${task.id}`}
      >
        <ListItem button key={task.id}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={task.name} secondary={task.created} />
        </ListItem>
      </Link>
    );
  }

  render() {
    let { task } = this.props;
    let taskForm = "";
      if (this.props.processDefinitionId) {
        taskForm = <Taskform />;
      } else {
        taskForm = (
          <Typography variant="h5" gutterBottom>
            Vennligst velg en oppgave.
          </Typography>
        );
      }

      if (!task) {
        // cookien med navn "LOGIN" er synnlig for alle sider
        return (
          <Typography variant="h5" gutterBottom>
            Laster Oppgaver ...
          </Typography>
        );
      } else {
        task = sortBy(task, "created").reverse();
        return (
          <Container fixed>
            <Grid divided>
              <Grid.Row>
                <Grid.Column width={4}>
                  <List divided relaxed>
                    {task.map(item => this.renderItem(item))}
                  </List>
                </Grid.Column>
                <Grid.Column width={12}>{taskForm}</Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        );
      }
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
      loadTasks
    }
  )(TasklistPage)
);
