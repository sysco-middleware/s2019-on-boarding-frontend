//  Config
//  Workers
const emailWorkers = require('./workers/EmailWorkers.js');
const cvPartnerWorker = require('./workers/CVPartnerWorker.js');
//  Testing Node js as a backend
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(jwt());

app.use('/admin', require('./admin/admin.controller'));
app.use('/employe', require('./employe/employe.controller'));

app.use(errorHandler);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

//  Add employe to CV Partner
cvPartnerWorker.cvPartnerPostUser("CVPartner");
//  Assigned task
emailWorkers.taskReminderEmail("SDRec", "magnus.ihle@gmail.com", "P1 - Camunda New Task Recieved", `<h1>You have recieved a new task in Camunda</h1><br> `); // Skal til servicedesk spør om epost // magnus.ihle@gmail.com
emailWorkers.taskReminderEmail("HRRec", "magnus.ihle@gmail.com", "Camunda New Task Recieved", `<h1>You have recieved a new task in Camunda</h1><br> `); // Skal til HR spør om epost // magnus.ihle@gmail.com
emailWorkers.taskReminderEmail("AdminRec", "magnus.ihle@gmail.com", "Camunda New Task Recieved", `<h1>You have recieved a new task in Camunda</h1><br> `); // Skal til Admin/Finans spør om epost // magnus.ihle@gmail.com
emailWorkers.taskReminderEmail("AccessRec", "magnus.ihle@gmail.com", "Camunda New Task Recieved", `<h1>You have recieved a new task in Camunda</h1><br> `); // Skal til Sjef ... ? spør om epost // magnus.ihle@gmail.com

//  Reminders
emailWorkers.taskReminderEmail("SDRem", "magnus.ihle@gmail.com", "Camunda Reminder", `<h1>You have not finished your assigned task in Camunda.</h1><br> `); // Skal til servicedesk spør om epost // magnus.ihle@gmail.com
emailWorkers.taskReminderEmail("HRRem", "magnus.ihle@gmail.com", "Camunda Reminder", `<h1>You have not finished your assigned task in Camunda.</h1><br> `); // Skal til HR spør om epost // magnus.ihle@gmail.com
emailWorkers.taskReminderEmail("AdminRem", "magnus.ihle@gmail.com", "Camunda Reminder", `<h1>You have not finished your assigned task in Camunda.</h1><br> `); // Skal til Admin/ Finans spør om epost // magnus.ihle@gmail.com
emailWorkers.taskReminderEmail("AccessRem", "magnus.ihle@gmail.com", "Camunda Reminder", "<h1>You have not finished your assigned task in Camunda.</h1>"); // Skal til Sjef ... ? spør om epost // magnus.ihle@gmail.com

//  Velkomstbrev
emailWorkers.welcomeEmail("WelcomeEmail");

//  Check up form (i en egen func fordi vi trenger to stk fetch req)
emailWorkers.checkUpEmail("CheckUpRec", "magnus.ihle@gmail.com", "Oppfølgingsskjema"); // Skal til aktuell konsulent (henter epost fra form) // magnus.ihle@gmail.com
emailWorkers.checkUpEmail("CheckUpRem", "magnus.ihle@gmail.com", "Påminnelse oppfølgingsskjema"); // Skal til aktuell konsulent (henter epost fra form) // magnus.ihle@gmail.com

