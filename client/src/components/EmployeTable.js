import React, { Component } from "react";

import MaterialTable from "material-table";
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';
import { AddBox, ArrowUpward } from "@material-ui/icons";

import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'
import SaveAlt from '@material-ui/icons/SaveAlt'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Add from '@material-ui/icons/Add'
import Check from '@material-ui/icons/Check'
import FilterList from '@material-ui/icons/FilterList'
import Remove from '@material-ui/icons/Remove'
import styles from '../css/styles'

class EmployeTable extends Component {
  constructor() {
    super();
    this.state = {
      employes: [],
      open: false
    };
  }

  componentDidMount() {
    fetch('/api/v1/getEmployes')
      .then(response => response.json())
      .then(data => {
        this.setState({ employes: data.employes });
      });
  }


 getData = () => {
    if (this.state.employes.length > 0) {
      const employes = this.state.employes;
      const employeArray = [];
      let employe;
      for (var i = 0; i < employes.length; i++) {
        employe = {
          firstName: employes[i].firstName,
          lastName: employes[i].lastName,
          department: employes[i].department,
          phoneNumber: employes[i].phoneNumber,
          boss: employes[i].boss,
          position: employes[i].position,
          personalEmail: employes[i].personalEmail,
          startDate: employes[i].startDate,
        };
        employeArray.push(employe);
      }
      return employeArray;
    } else {
      return [];
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <MaterialTable
          icons={{ 
            Check: Check,
            DetailPanel: ChevronRight,
            Export: SaveAlt,
            Filter: FilterList,
            FirstPage: FirstPage,
            LastPage: LastPage,
            NextPage: ChevronRight,
            PreviousPage: ChevronLeft,
            Search: Search,
            ThirdStateCheck: Remove,
          }}
          columns={[
            { title: "Fornavn", field: "firstName" },
            { title: "Etternavn", field: "lastName" },
            { title: "Avdeling", field: "department" },
            { title: "Telefonnummer", field: "phoneNumber", type: "numeric"},
            { title: "Sjef", field: "boss" },
            { title: "Stilling", field: "position"}, 
            { title: "Personlig e-post", field: "personalEmail"}, 
            { title: "Start Dato", field: "startDate", type: "date"}
          ]}
          data={this.getData()}
          title="Ansatte"
          detailPanel={rowData => {
            return (
              <div style={{ padding: 20 }}>
                <Grid container spacing={24}>
                  <h1>HEI</h1>
                </Grid>
              </div>
            );
          }}
          onRowClick={(event, rowData, togglePanel) => togglePanel()}
          localization={{
            pagination: {
              labelDisplayedRows: "{from}-{to} av {count}", // {from}-{to} of {count}
              labelRowsPerPage: "Rader Per Side:", // Rows per page:
              firstAriaLabel: "Første Side", // First Page
              firstTooltip: "Første Side", // First Page
              previousAriaLabel: "Forrige Side", // Previous Page
              previousTooltip: "Forrige Side", // Previous Page
              nextAriaLabel: "Neste Side", // Next Page
              nextTooltip: "Neste Side", // Next Page
              lastAriaLabel: "Siste Side", // Last Page
              lastTooltip: "Siste Side" // Last Page
            },
            toolbar: {
              nRowsSelected: "{0} rad(er) valgt", // {0} row(s) selected
              showColumnsTitle: "Vis Kolonner", // Show Columns
              showColumnsAriaLabel: "Vis Kolonner", // Show Columns
              exportTitle: "Eksporter", // Export
              exportAriaLabel: "Eksporter", // Export
              exportName: "Eksporter som cv", // Export as CSV
              searchTooltip: "Søk" // Search
            },
            header: {
              actions: "Handlinger" // Actions
            },
            body: {
              emptyDataSourceMessage: "Ingen ansatte å vise", // No records to display
              filterRow: {
                filterTooltip: "Filter" // Filter
              }
            }
          }}
        />
      </div>
    );
  }
}

export default withStyles(styles)(EmployeTable);
