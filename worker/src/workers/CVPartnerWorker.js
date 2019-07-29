//  Config
const {camundaURL, cvPartnerURL, cvPartnerKey} = require("../config.js");
//  Camunda
const { Client, logger } = require("camunda-external-task-client-js");
const config = { baseUrl: camundaURL, use: logger };
const fetch = require("node-fetch");
const client = new Client(config);

module.exports = {

    cvPartnerPostUser: function (taskName) {
        client.subscribe(taskName, async function({ task, taskService }) {

            var processId = task.processInstanceId;
            var fullName;
        
              fetch(
                camundaURL + "/process-instance/" +
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
            let data = 
            {
                "user":{
                    "email": syscoEmail,
                    "upn":null,
                    "external_unique_id":null,
                    "name": fullName,
                    "country_id":"5c485bffacaa42739b884e1d",
                    "office_id":"5c485bffacaa42739b884e1f",
                    "send_email":false,
                    "role":"consultant",
                    "extra_roles":[
                    ],
                    "role_allowed_office_ids":[
                    ],
                    "role_allowed_tag_ids":[
                    ]
                }
            }
        
            fetch( cvPartnerURL + "/users", {
                method: "POST", 
                body: JSON.stringify(data),
                headers: {
                    "Authorization": cvPartnerKey,
                    "Content-type": "application/json",
                }, 
            }).then(response => {
                if(!response.ok){
                    console.log(response.status);
                }
            });
              
            }
            await taskService.complete(task);
          });
        }
}