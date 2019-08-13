import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import MaterialTable from "material-table";
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { AddBox, ArrowUpward } from "@material-ui/icons";
import { withRouter } from "react-router-dom";

import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Add from "@material-ui/icons/Add";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";
import Remove from "@material-ui/icons/Remove";
import styles from "../css/styles";
import { connect } from "react-redux";
import { employeActions } from "../actions/node-rest/employe-service";
import { adminActions } from "../actions/node-rest/admin-service";

class EmployeTable extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  componentDidMount() {
    this.props.getEmployes();
  }
  render() {
    const { classes, employes } = this.props;
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
            ThirdStateCheck: Remove
          }}
          columns={[
            { title: "Fornavn", field: "firstName" },
            { title: "Etternavn", field: "lastName" },
            { title: "Avdeling", field: "department" },
            { title: "Personlig e-post", field: "personalEmail" },
            { title: "Telefonnummer", field: "phoneNumber", type: "numeric" },
            { title: "Nærmeste sjef", field: "nearestBoss" },
            { title: "Avdeling", field: "department" },
            { title: "Stilling", field: "position" },
            { title: "Start Dato", field: "startDate", type: "date" }
          ]}
          data={employes.items}
          title="Ansatte"
          detailPanel={rowData => {
            return (
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
                  ThirdStateCheck: Remove
                }}
                title="Multiple Detail Panels Preview"
                columns={[
                  { title: "Name", field: "name" },
                  { title: "Surname", field: "surname" },
                  { title: "Birth Year", field: "birthYear", type: "numeric" },
                  {
                    title: "Birth Place",
                    field: "birthCity",
                    lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
                  }
                ]}
                data={[
                  {
                    name: "Mehmet",
                    surname: "Baran",
                    birthYear: 1987,
                    birthCity: 63
                  },
                  {
                    name: "Zerya Betül",
                    surname: "Baran",
                    birthYear: 2017,
                    birthCity: 34
                  }
                ]}
              />
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

function mapStateToProps(state) {
  const { employes } = state;
  return { employes };
}

const actionCreators = {
  getEmployes: employeActions.getAll
};

export default withStyles(styles)(
  withRouter(
    connect(
      mapStateToProps,
      actionCreators
    )(EmployeTable)
  )
);
