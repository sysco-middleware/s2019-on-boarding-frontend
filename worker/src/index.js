//  Config
const { mongoCreateCollection, mongoCreateDB, mongoFetchTable, mongoCheckForDup } = require("./db.js");
//  Workers
const emailWorkers = require('./workers/EmailWorkers.js');
const cvPartnerWorker = require('./workers/CVPartnerWorker.js');
const mysqlWorker = require('./workers/mysqlWorker.js');
//  Testing Node js as a backend
const express = require('express');


//  Move data to DB
mongoCreateDB();
mongoCreateCollection();
const app = express();

app.get('/api/v1/getEmployes', (req, res, next) => {
    mongoFetchTable("employes", function(result) {
        res.status(200).send({
            employes: result
        });
    });
}); 
app.use(express.json());

app.post('/api/v1/checkEmployes', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    mongoCheckForDup("employes", firstName, lastName, function(result) {
        res.status(200).send(result);
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
mysqlWorker.copyVars("ToDB");


//  Add employe to CV Partner
cvPartnerWorker.cvPartnerPostUser("CVPartner");
//  Assigned task
emailWorkers.taskReminderEmail("SD1Rec", "magnus.ihle@gmail.com", "P1 - Camunda New Task Recieved", `<h1>You have recieved a new task in Camunda</h1><br> `); // Skal til servicedesk spør om epost // magnus.ihle@gmail.com
emailWorkers.taskReminderEmail("SD2Rec", "magnus.ihle@gmail.com", "Camunda New Task Recieved", `<h1>You have recieved a new task in Camunda</h1><br> `); // Skal til servicedesk spør om epost // magnus.ihle@gmail.com
emailWorkers.taskReminderEmail("HRRec", "magnus.ihle@gmail.com", "Camunda New Task Recieved", `<h1>You have recieved a new task in Camunda</h1><br> `); // Skal til HR spør om epost // magnus.ihle@gmail.com
emailWorkers.taskReminderEmail("AdminRec", "magnus.ihle@gmail.com", "Camunda New Task Recieved", `<h1>You have recieved a new task in Camunda</h1><br> `); // Skal til Admin/Finans spør om epost // magnus.ihle@gmail.com
emailWorkers.taskReminderEmail("AccessRec", "magnus.ihle@gmail.com", "Camunda New Task Recieved", `<h1>You have recieved a new task in Camunda</h1><br> `); // Skal til Sjef ... ? spør om epost // magnus.ihle@gmail.com
emailWorkers.taskReminderEmail("hrPipedrive", "magnus.ihle@gmail.com", "Camunda New Task Recieved", `<h1>You have recieved a new task in Camunda</h1><br> `); // Skal til Sjef ... ? spør om epost // magnus.ihle@gmail.com
emailWorkers.taskReminderEmail("Wiki", "magnus.ihle@gmail.com", "Camunda New Task Recieved", `<h1>You have recieved a new task in Camunda</h1><br> `); // Skal til Sjef ... ? spør om epost // magnus.ihle@gmail.com

//  Reminders
emailWorkers.taskReminderEmail("SDReminder1", "magnus.ihle@gmail.com", "Camunda Reminder", `<h1>You have not finished your assigned task in Camunda.</h1><br> `); // Skal til servicedesk spør om epost // magnus.ihle@gmail.com
emailWorkers.taskReminderEmail("SDReminder2", "magnus.ihle@gmail.com", "Camunda Reminder", `<h1>You have not finished your assigned task in Camunda.</h1><br> `); // Skal til servicedesk spør om epost // magnus.ihle@gmail.com
emailWorkers.taskReminderEmail("HRReminder", "magnus.ihle@gmail.com", "Camunda Reminder", `<h1>You have not finished your assigned task in Camunda.</h1><br> `); // Skal til HR spør om epost // magnus.ihle@gmail.com
emailWorkers.taskReminderEmail("AdminReminder", "magnus.ihle@gmail.com", "Camunda Reminder", `<h1>You have not finished your assigned task in Camunda.</h1><br> `); // Skal til Admin/ Finans spør om epost // magnus.ihle@gmail.com
emailWorkers.taskReminderEmail("AccessReminder", "magnus.ihle@gmail.com", "Camunda Reminder", "<h1>You have not finished your assigned task in Camunda.</h1>"); // Skal til Sjef ... ? spør om epost // magnus.ihle@gmail.com
emailWorkers.taskReminderEmail("wikiReminder", "magnus.ihle@gmail.com", "Camunda Reminder", "<h1>You have not finished your assigned task in Camunda.</h1>"); // Skal til Sjef ... ? spør om epost // magnus.ihle@gmail.com
emailWorkers.taskReminderEmail("pipedriveReminder", "magnus.ihle@gmail.com", "Camunda Reminder", "<h1>You have not finished your assigned task in Camunda.</h1>"); // Skal til Sjef ... ? spør om epost // magnus.ihle@gmail.com

//  Velkomstbrev
emailWorkers.welcomeEmail("WelcomeEmail");

//  Check up form (i en egen func fordi vi trenger to stk fetch req)
emailWorkers.checkUpEmail("CheckUpRec", "magnus.ihle@gmail.com", "Oppfølgingsskjema"); // Skal til aktuell konsulent (henter epost fra form) // magnus.ihle@gmail.com
emailWorkers.checkUpEmail("CheckUpReminder", "magnus.ihle@gmail.com", "Påminnelse oppfølgingsskjema"); // Skal til aktuell konsulent (henter epost fra form) // magnus.ihle@gmail.com

