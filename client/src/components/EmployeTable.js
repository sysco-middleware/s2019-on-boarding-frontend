import React, { Component } from "react";

//import MaterialTable from "material-table";
import { withStyles } from "@material-ui/core/styles";
//import { RestService } from "../../shared/services/RestService";
import { Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
//import ProjectTable from "./ProjectTable";
//import DictionaryTable from "./DictionaryTable";
//import TableCompanyDialog from "./TableCompanyDialog";
//import { showCompanyDialog, hideCompanyDialog } from '../../actions/Project/put';
//import { connect } from "react-redux";

const styles = theme => ({
  root: {
    width: "100%"
  }
});

class EmployeTable extends Component {
  constructor() {
    super();
    this.state = {
      companies: [],
      open: false
    };
  }

  componentDidMount() {
    fetch('/api/v1/getEmployes')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        //this.setState({ companies: data });
      });
    console.log("Connected");
  }

  render() {
    return <div />;
  }
}
export default EmployeTable;

/* getData = () => {
    if (this.state.companies.length > 0) {
      const companies = this.state.companies;
      const companyArray = [];
      let company;
      for (var i = 0; i < companies.length; i++) {
        company = {
          id: companies[i].id,
          name: companies[i].name,
          orgnr: companies[i].organization_number,
          projects: companies[i].projects,
          projectCount: companies[i].projects.length,
          dictionary: companies[i].dictionary
        };
        if (
          companies[i].hasOwnProperty("industry") &&
          companies[i].industry != null
        ) {
          let companyIndustry = {
            industryDescription: companies[i].industry.description,
            industryCode: companies[i].industry.id
          };
          company = Object.assign(company, companyIndustry);
        }
        if (companies[i].hasOwnProperty("email")) {
          let companyEmail = {
            email: companies[i].email
          };
          company = Object.assign(company, companyEmail);
        }
        companyArray.push(company);
      }
      return companyArray;
    } else {
      return [];
    }
  };

  renderDictionaries = rowData => {
    if (rowData.dictionary.length > 0) {
      return rowData.dictionary.map((dictionaryItem, index) => {
        let dict = JSON.parse(dictionaryItem.semantic);
        const dictionary = Object.keys(dict).map((dictItem, index) => ({
          key: dictItem,
          value: dict[dictItem],
          id: dictionaryItem.id
        }));
        return (
          <DictionaryTable
            dictionary={dictionary}
            id={dictionaryItem.id}
            key={index}
          />
        );
      });
    }
  };
  toggleDialog = () =>{
    this.props.showCompanyDialog();
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <TableCompanyDialog open={this.state.open}/>
        <MaterialTable
          columns={[
            { title: "Firmanavn", field: "name" },
            { title: "Epost", field: "email" },
            { title: "Organisasjonsnummer", field: "orgnr", type: "numeric" },
            {
              title: "Antall Prosjekter",
              field: "projectCount",
              type: "numeric"
            },
            { title: "Industri", field: "industryDescription" },
            { title: "Industri Kode", field: "industryCode", type: "numeric" }
          ]}
          data={this.getData()}
          title="Kontakter"
          actions={[
            {
              icon: "add_box",
              tooltip: "Legg til ny kontakt",
              isFreeAction: true,
              onClick: event => {this.toggleDialog()}
            }
          ]}
          detailPanel={rowData => {
            return (
              <div style={{ padding: 20 }}>
                <Grid container spacing={24}>
                  <Grid item xs={8}>
                    <ProjectTable
                      projects={rowData.projects}
                      companyName={rowData.name}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    {this.renderDictionaries(rowData)}
                  </Grid>
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
              emptyDataSourceMessage: "Ingen firma å vise", // No records to display
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

export default connect(null, {showCompanyDialog, hideCompanyDialog})(withStyles(styles)(EmployeTable))

*/
