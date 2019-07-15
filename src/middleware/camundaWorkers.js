const { Client, logger } = require("camunda-external-task-client-js");
const nodemailer = require("nodemailer");
const fetch = require("node-fetch");

const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger };

const client = new Client(config);

client.subscribe("EmailReminder", async function({ task, taskService }) {
  
  console.log("Email reminder");
  
  var processId = task.processInstanceId;
  var secondLink;


  fetch('http://localhost:8080/engine-rest/task?processInstanceId=' + processId)
  .then(response => response.json())
  .then(data => {
      var taskId = data[0].id;
      var processDefinitionId = data[0].processDefinitionId;

      var link = processDefinitionId + '/' + taskId;
      secondLink = link;
      logLink();
  })
  .catch(error => {
      console.log(error);
  })

  var transporter = nodemailer.createTransport({
    host: 'smtp.googlemail.com', 
    port: 465, 
    secure: true,
    auth: {
        user: 'sysco.sommer@gmail.com', 
        pass: 'Sommer2019' 
    }
    });

  function logLink() {

        var tasklink = "http://localhost:3000/tasklist/" + secondLink;

        let mailOptions = {
            from: '"Camunda Web" <admin@sysco.no>',
            to: 'ivlellina@gmail.com, magnus.ihle@sysco.no',
            subject: 'Camunda Reminder',
            html: `<h1>You have not finished your assigned task in Camunda.</h1><br><a href="${tasklink}">Please click this link to finish your assigned task.</a>`
        };

        try{
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Epost sendt: %s', info.response);
            }); 
        } catch {
            console.log(error);
        }       
}
  await taskService.complete(task);
  
});
