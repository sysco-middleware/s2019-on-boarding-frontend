//  Camunda
const { Client, logger } = require("camunda-external-task-client-js");
const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger };
const fetch = require("node-fetch");
const client = new Client(config);

//  Nodemailer
const nodemailer = require("nodemailer");
//  PDF
const fs = require("fs");
const ejs = require('ejs');
const pdf = require("html-pdf");

welcomeWorker("WelcomeEmail");

function welcomeWorker(taskName) {
  client.subscribe(taskName, async function({ task, taskService }) {
    console.log("Welcome email sent!");

    var processId = task.processInstanceId;
    var personalEmail;
    var syscoEmail;
    var fullName;

    fetch(
      "http://localhost:8080/engine-rest/process-instance/" +
        processId +
        "/variables"
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        syscoEmail = data.syscoEmail.value;
        personalEmail = data.personalEmail.value;
        fullName = data.firstName.value + " " + data.lastName.value;
        console.log(personalEmail);
        console.log(syscoEmail);
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
      console.log(personalEmail);
      console.log(syscoEmail);

      //var html = fs.readFileSync('src/html/welcome.htm', 'utf8');
      var options = { height: "1100px", width: "793px" };

      var compiled = ejs.compile(fs.readFileSync('src/html/welcome.html', 'utf8'));
      var html = compiled({syscoEmail: syscoEmail, wikiLogin: "Må ha felt for wiki login"});
      pdf.create(html, options).toFile(`src/html/Informasjon ${fullName}.pdf`, function(err, res) {
        if (err) return console.log(err);
        console.log(res);
      });

      let mailOptions = {
        from: '"Camunda Web" <admin@sysco.no>',
        to: personalEmail,
        subject: "Informasjon",
        html: `<h1>Velkommen til Sysco!</h1>
        <br>
        <p> Vedlagt ligg det informasjon til deg som nyansatt. </p>`,
        attachments: [
            {   
                filename: `Informasjon ${fullName}.pdf`,
                path: `src/html/Informasjon ${fullName}.pdf` // stream this file
            },
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

      try {
        fs.unlink(`src/html/Informasjon ${fullName}.pdf`);
        console.log(`File: Informasjon ${fullName}.pdf has been deleted.`);
      } catch(error) {
        console.error(error);
      }
    }
    await taskService.complete(task);
  });
}
