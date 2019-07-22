const { Client, logger } = require("camunda-external-task-client-js");
//      WE DON'T USE THIS ONE ANYMORE. DEPLOY LOCALLY: 
//                                                          cd /src/middleware 
//                                                          node ./camundaWorkers.js





const config = { baseUrl: "http://camunda-mysql:8080/engine-rest", use: logger };

const client = new Client(config);

client.subscribe("EmailReminder", async function({ task, taskService }) {
  
  //  Nodemailer
  console.log("Email reminder");

  await taskService.complete(task);
  
});
