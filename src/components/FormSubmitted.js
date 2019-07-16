import React from 'react';
import { Message } from 'semantic-ui-react'
import Container from '@material-ui/core/Container';

class FormSubmitted extends React.Component {

render(){
    return(
        <Container fixed className="margin-top-sm">
        <Message
        success
        header='The form has been submitted'
        content='Thank you.'
      />
      </Container>
    )
}

}

export default FormSubmitted
