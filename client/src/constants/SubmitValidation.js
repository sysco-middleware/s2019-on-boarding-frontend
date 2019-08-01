import { SubmissionError } from 'redux-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
  return sleep(1000).then(() => {
    // simulate server latency
    if (['john', 'paul', 'george', 'ringo'].includes(values.firstName)) {
      throw new SubmissionError({
        username: 'User does not exist',
        _error: 'Login failed!'
      })
    } 
  })
}

export default submit

/* 

fetch('/api/v1/checkEmployes', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: {
            "firstName":values.firstName, 
            "lastName":values.lastName 
        }
    }).then(response => {
        if(response == true) {console.log("Exists")}
    });

    */