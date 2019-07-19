
import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;
import javax.activation.*;

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;

public class externalWorker implements JavaDelegate {

  public static void execute(DelegateExecution execution) throws Exception {
     
        // Recipient's email ID needs to be mentioned.
        String to = "linok.super@mail.ru";

        // Sender's email ID needs to be mentioned
        String from = "ivlellina@gmail.com";

        // Assuming you are sending email from localhost
        String host = "localhost";

        // Get system properties
        Properties properties = System.getProperties();

        // Setup mail server
        properties.setProperty("mail.smtp.host", host);

        // Get the default Session object.
        Session session = Session.getDefaultInstance(properties);

        try {
            // Create a default MimeMessage object.
            MimeMessage message = new MimeMessage(session);

            // Set From: header field of the header.
            message.setFrom(new InternetAddress(from));

            // Set To: header field of the header.
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

            // Set Subject: header field
            message.setSubject("Email reinder");

            // Now set the actual message
            message.setText("Hei you have an unfinished task in Camunda");

            // Send message
            Transport.send(message);
            System.out.println("Sent message successfully....");
        } catch (MessagingException mex) {
            mex.printStackTrace();
        
    }

  }

}