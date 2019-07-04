const { Client, logger } = require("camunda-external-task-client-js");
const nodemailer = require("nodemailer");
const fetch = require("node-fetch");

//import { CALL_API, Schemas } from '../middleware/api';


const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger };

const client = new Client(config);

client.subscribe("EmailReminder", async function({ task, taskService }) {
  
  
  //  Nodemailer

  console.log("Email reminder");
  
  var processId = task.processInstanceId;
  var data = null;

  fetch('http://localhost:8080/engine-rest/process-instance/' + processId + '/activity-instances')
  .then(response => {
      return response.json();
  })
  .then(data => {
      console.log(data);
  });
  console.log(JSON.stringify(data));
  


    /** 
  nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.googlemail.com', 
        port: 465, 
        secure: true,
        auth: {
            user: 'sysco.sommer@gmail.com', 
            pass: 'Sommer2019' 
        }
    });
  
    let mailOptions = {
        from: '"Camunda Web" <admin@sysco.no>',
        to: 'magnus.ihle@gmail.com',
        subject: 'Welcome Email',
        html: '<h1>You have not finished your assigned task in Camunda.</h1><br><a href="#">Please click this link to finish your assigned task.</a>'
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Epost sendt: %s', info.messageId);
    }); 
  }); */

  

  await taskService.complete(task);
});