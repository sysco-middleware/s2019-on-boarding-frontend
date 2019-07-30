//  Config
const { camundaURL, camundaTestURL } = require("../config.js");
const { dbAddEmploye } = require("../db.js");
//  Camunda
const { Client, logger } = require("camunda-external-task-client-js");
const config = { baseUrl: camundaTestURL, use: logger };
const fetch = require("node-fetch");
const client = new Client(config);

module.exports = {
  copyVars: function(taskName) {
    client.subscribe(taskName, async function({ task, taskService }) {
      var processId = task.processInstanceId;
      var fullName;
      var department;
      var phoneNumber;
      var boss;
      var position;
      var personalEmail;
      var startDate; 

      fetch(camundaTestURL + "/process-instance/" + processId + "/variables")
        .then(response => response.json())
        .then(data => {
          //syscoEmail = data.syscoEmail.value;
          fullName = data.firstName.value + " " + data.lastName.value;
          department = data.Department.value;
          phoneNumber = data.phoneNumber.value;
          boss = data.boss.value;
          position = data.position.value;
          personalEmail = data.personalEmail.value;
          startDate = data.startDate.value;
          logLink();
        })
        .catch(error => {
          console.log(error);
        });

      function logLink() {
        dbAddEmploye(fullName, department, phoneNumber, boss, position, personalEmail, startDate);
      }
      await taskService.complete(task);
    });
  }
};
