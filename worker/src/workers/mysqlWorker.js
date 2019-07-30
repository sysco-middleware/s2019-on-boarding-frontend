//  Config
const { camundaURL, camundaTestURL } = require("../config.js");
//  Camunda
const { Client, logger } = require("camunda-external-task-client-js");
const config = { baseUrl: camundaTestURL, use: logger };
const fetch = require("node-fetch");
const client = new Client(config);
//  Mysql
const db = require('mysql');

module.exports = {

    copyVars: function (taskName) {
        client.subscribe(taskName, async function({ task, taskService }) {

            var processId = task.processInstanceId;
            var fullName;
        
              fetch(
                camundaTestURL + "/process-instance/" +
                  processId +
                  "/variables"
              )
                .then(response => response.json())
                .then(data => {
                  syscoEmail = data.syscoEmail.value;
                  fullName = data.firstName.value + " " + data.lastName.value;
                  logLink();
                })
                .catch(error => {
                  console.log(error);
                });
        
            function logLink() {
        
             
                
            }
            await taskService.complete(task);
          });
        }
}