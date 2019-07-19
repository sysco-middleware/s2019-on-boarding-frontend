# Onboarding with Camunda and React

Sysco Onboarding is an application to secure the required processes for Onboarding a new consultant is completed as well as documented. 
The program is built on Camunda BPM an open source platform for workflow and desicion automation. As a backend and React.js as a frontend. 
Camunda BPM offers a user interface, but in this case it was a better fit with a tailored frontend. 

For email reminders the system uses a Node.js worker to poll tasks from Camunda. 

The application runs on docker. 

## Installation 

Create a folder somewhere on your computer:
```bash
mkdir Sysco Onboard

   // Clone using ssh:
git clone git@github.com:sysco-middleware/s2019-on-boarding-frontend.git

   //Clone using https:
https://github.com/sysco-middleware/s2019-on-boarding-frontend.git
```

###### Running docker

Since the application runs on docker, [Download Docker](https://www.docker.com/get-started). 

For starting up the project for the first time. 
```bash
docker-compose up --build 
```
For just starting the project later. 
```bash
docker-compose up
```

Docker compose runs: 
    - Camunda BPM
    - MySQL database for Camunda
    - Node.js worker

###### Running React.js

In the development stage of the project the frontend runs locally. 
 
To start the application Node.js is required,  [Download Node.js](https://nodejs.org/en/download/)

From the project root: 

```bash
npm install
npm start
```

##  Running the application

To deploy a new BPMN process to Camunda go to [http://localhost:3000](http://localhost:3000) the click on
"Velg en BPMN fil du vil deploye til camunda" button on the landing page. 

The onboard process file is under: 

1. s2019-on-boarding-frontend/ The name you gave the folder:
   - examples
   - onboard
   - onboardProcess.bpmn

To access the default Camunda user interface visit [http://localhost:8080/camunda/](http://localhost:8080/camunda/app/) 
go into "Cocpit" click on "Process Definitions" and then check if "Sysco Onboard" the process has succesfully been deployed. 

To start a new process click on menu and then "Start en ny prosess". Select the process you want to start in this case "Sysco Onboard - Version #".

Fill out the form and click "Registrer". 

After submitting the form you'll be redirected to the tasklist "Oppgaveliste" in the menu. You can also see the process instance under Cocpit in Camunda. 

To continue the process complete the new forms in the tasklist. 

## Development

To create a new process create it using [Camunda Modeler](https://camunda.com/download/modeler/) and read the [docs](https://docs.camunda.org/get-started/quick-start/service-task/) on how to use it. 

Save the BPMN process and deploy it the same way you deployed "onboardProcess.bpmn"

If the process has user tasks with forms create a new folder.

1. root: 
   - src
   - components
   - forms 
   - `mkdir processName`

Or using bash:

```bash
mkdir .\src\components\forms\testForm
cd .\src\components\forms\testForm\
touch startform.js
```

Go to the event inside camunda modeler, click on the task, click on "forms" and paste the form name in the "form key" field. 

Now it's time to create the form. 

Open "startform.js" in the editor of your choice and paste

```bash
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Button } from 'semantic-ui-react'

const SimpleForm = props => {
  const { handleSubmit } = props
  return (
    <Form onSubmit={handleSubmit}>
        <Field name='firstName' component={InputField} label='First Name' placeholder='First Name'/>
        <Field name='lastName' component={InputField} label='Last Name' placeholder='Last Name'/>
        <Form.Field control={Button} primary type='submit'>Register</Form.Field>
    </Form>
  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm)
```

The form is created using "Redux Form" read the [docs](https://redux-form.com/8.2.2/docs/gettingstarted.md/) here. 

## Roadmap

This is a small overwiev of tasks, finished and tasks to-do.

###### Done

- [x] Get camunda tasklist working with react and camunda Rest API
- [X] Create the process diagram using camunda modeler
- [X] Create a somewhat functioning process
- [X] Run camunda through Docker
- [X] Create a MySQL database for easier access to variables stored in Camunda
- [X] Run the whole application in a Docker compose using Docker images 
- [X] Create and run Node.js worker for listening to external tasks
- [X] Set up email worker with smtp connector for email reminders
- [X] Dynamic date timer event in camunda modeler 
- [X] Write README.md


###### To-do

- [ ] When entering form from email only display single form and not everything else
- [ ] Generating PDF from Redux Form values
- [ ] Integrating with motivati through Rest API
- [ ] Create a table from MySQL data for completed processes
- [ ] Create a change role, and offboarding process (Handling stored data)
- [ ] Create frontend tests 
- [ ] Modify the forms to the end users requirements


###### Services to test
- [ ] \(Optional) Moving the worker to Java not Node.js for better handling of multithreading




