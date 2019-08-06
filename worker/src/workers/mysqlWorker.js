//  Config
const { camundaURL } = require("../config.js");
const { mongoInsertEmp } = require("../db.js");
//  Camunda
const { Client, logger } = require("camunda-external-task-client-js");
const config = { baseUrl: camundaURL, use: logger };
const fetch = require("node-fetch");
const client = new Client(config);

module.exports = {
  copyVars: function(taskName) {
    client.subscribe(taskName, async function({ task, taskService }) {
      var processId = task.processInstanceId;

      fetch(camundaURL + "/process-instance/" + processId + "/variables")
        .then(response => response.json())
        .then(data => {
          //syscoEmail = data.syscoEmail.value;
          
          var empObj = {
            firstName: data.firstName.value,
            lastName: data.lastName.value,
            department: data.Department.value,
            phoneNumber: data.phoneNumber.value,
            boss: data.boss.value,
            position: data.position.value,
            personalEmail: data.personalEmail.value,
            startDate: data.startDate.value
          }
          mongoInsertEmp("employes", empObj);
        })
        .catch(error => {
          console.log(error);
        });
      await taskService.complete(task);
    });
  }
};
