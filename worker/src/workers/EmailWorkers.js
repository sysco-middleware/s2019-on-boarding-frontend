//  Config
const {camundaURL} = require("../config.js");
//  Camunda
const { Client, logger } = require("camunda-external-task-client-js");
const config = { baseUrl: camundaURL, use: logger };
const fetch = require("node-fetch");
const client = new Client(config);
//  Nodemailer
const nodemailer = require("nodemailer");
//  PDF
const fs = require("fs");
const ejs = require("ejs");
const pdf = require("html-pdf");

module.exports = {

taskReminderEmail: function (taskName, reciever, subject, html) {
  client.subscribe(taskName, async function({ task, taskService }) {
    console.log("Reminder sent from task: " + taskName);

    var processId = task.processInstanceId;
    var secondLink;

    fetch(
      camundaURL + "/task?processInstanceId=" + processId
    )
      .then(response => response.json())
      .then(data => {
        var taskId = data[0].id;
        var processDefinitionId = data[0].processDefinitionId;

        var link = processDefinitionId + "/" + taskId;
        secondLink = link;
        logLink();
      })
      .catch(error => {
        console.log(error);
      });

    var transporter = nodemailer.createTransport({
      host: "smtp.googlemail.com",
      port: 465,
      secure: true,
      auth: {
        user: "sysco.sommer@gmail.com",
        pass: "Sommer2019"
      }
    });

    function logLink() {
      var tasklink = "http://localhost:3000/email/" + secondLink;

      let mailOptions = {
        from: '"Camunda Web" <admin@sysco.no>',
        to: reciever,
        subject: subject,
        html: html + `<br><a href="${tasklink}">Please follow this link to finish your assigned task.</a>`
      };
      try {
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return console.log(error);
          }
          console.log("Epost sendt: %s", info.response);
        });
      } catch {
        console.log(error);
      }
    }
    await taskService.complete(task);
  });
},

welcomeEmail: function (taskName) {
  client.subscribe(taskName, async function({ task, taskService }) {
    console.log("Welcome email sent!");

    var processId = task.processInstanceId;
    var personalEmail;
    var syscoEmail;
    var wikiUser;
    var fullName;

    fetch(
      camundaURL + "/process-instance/" +
        processId +
        "/variables"
    )
      .then(response => response.json())
      .then(data => {
        syscoEmail = data.syscoEmail.value;
        wikiUser = data.wiki.value;
        personalEmail = data.personalEmail.value;
        fullName = data.firstName.value + " " + data.lastName.value;
        logLink();
      })
      .catch(error => {
        console.log(error);
      });

    var transporter = nodemailer.createTransport({
      host: "smtp.googlemail.com",
      port: 465,
      secure: true,
      auth: {
        user: "sysco.sommer@gmail.com",
        pass: "Sommer2019"
      }
    });

    function logLink() {
      var options = { height: "1100px", width: "793px" };

      var compiled = ejs.compile(
        fs.readFileSync("../html/welcome.html", "utf8")
      );
      var html = compiled({
        syscoEmail: syscoEmail,
        wikiLogin: wikiUser
      });
      pdf
        .create(html, options)
        .toFile(`../html/Informasjon.pdf`, function(err, res) {
          if (err) return console.log(err);
          console.log(res);
        });

      let mailOptions = {
        from: '"Camunda Web" <admin@sysco.no>',
        to: personalEmail,
        subject: `Informasjon ${fullName}`,
        html: `<h1>Velkommen til Sysco!</h1>
        <br>
        <p> Vedlagt ligg det informasjon til deg som nyansatt. </p>`,
        attachments: [
          {
            filename: `Informasjon ${fullName}.pdf`,
            path: `../html/Informasjon.pdf` // Streaming the file
          }
        ]
      };

      try {
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return console.log(error);
          }
          console.log("Epost sendt: %s", info.response);
        });
      } catch {
        console.log(error);
      }
    }
    await taskService.complete(task);
  });
},

checkUpEmail: function (taskName, reciever, subject) {
  client.subscribe(taskName, async function({ task, taskService }) {
    console.log("Reminder sent from task: " + taskName);

    var processId = task.processInstanceId;
    var secondLink;
    var fullName;

    fetch(
      camundaURL + "/task?processInstanceId=" + processId
    )
      .then(response => response.json())
      .then(data => {
        var taskId = data[0].id;
        var processDefinitionId = data[0].processDefinitionId;

        var link = processDefinitionId + "/" + taskId;
        secondLink = link;
        logLink();
      })
      .catch(error => {
        console.log(error);
      });

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

    var transporter = nodemailer.createTransport({
      host: "smtp.googlemail.com",
      port: 465,
      secure: true,
      auth: {
        user: "sysco.sommer@gmail.com",
        pass: "Sommer2019"
      }
    });

    function logLink() {
      var tasklink = "http://localhost:3000/email/" + secondLink;

      let mailOptions = {
        from: '"Camunda Web" <admin@sysco.no>',
        to: reciever,  // Denne skal i fremtiden være : syscoEmail
        subject: subject,
        html: `<h1>Hei ${fullName},</h1>
        <br>
        <p>Vi hadde satt pris på om du kunne tatt deg tiden til å svare på dette skjema. Det hjelper oss i Sysco til å forbedre onboarding av nye ansatte.</p>
        <br>
        <a href="${tasklink}">Please follow this link to finish your assigned task.</a>`
      };
      try {
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return console.log(error);
          }
          console.log("Epost sendt: %s", info.response);
        });
      } catch {
        console.log(error);
      }
    }
    await taskService.complete(task);
  });
}
}
