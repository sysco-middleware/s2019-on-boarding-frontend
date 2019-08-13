import React, { Component } from 'react'
import { deployProcess } from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import FileReaderInput from 'react-file-reader-input'
import styles from '../css/styles'

//  Material UI
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { history } from '../shared/history';


class DeployProcess extends Component {
  handleChange = (e, results) => {
    results.forEach(result => {
      const [e, file] = result
      this.uploadFile(file.name, e.target.result)
    });
  }

  uploadFile(filename, file) {
    this.props.deployProcess(filename, file)
    history.push('/');
  }

  render() {
    const {classes} = this.props;
    if (!this.props.processDeployment) {
      return (
        <React.Fragment>
          <FileReaderInput as="binary" id="my-file-input" onChange={this.handleChange}>
            <Button variant="contained" className={classes.button}>Velg en BPMN fil du vil deploye til camunda</Button>
          </FileReaderInput>
      </React.Fragment>  
      )
    } else {
      return (
        <p>Successfully uploaded bpmn file to engine</p>
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

export default withStyles(styles)(withRouter(connect(mapStateToProps, {
  deployProcess
})(DeployProcess)))
