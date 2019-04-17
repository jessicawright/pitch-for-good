package org.wecancodeit.pitchforgood.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.wecancodeit.pitchforgood.models.Organization;
import org.wecancodeit.pitchforgood.models.Volunteer;


@Service
public class NotificationService {

	private JavaMailSender javaMailSender;
	
	@Autowired
	public NotificationService(JavaMailSender javaMailSender) {
		this.javaMailSender = javaMailSender;
	}
	
	public void sendNotification(Organization orgToSendTo) throws MailException {
		//send email
		SimpleMailMessage mail = new SimpleMailMessage();
		mail.setTo(orgToSendTo.getOrgEmail());
		mail.setFrom("pitchforgood@gmail.com");
		mail.setSubject("You've received a project pitch!");
		mail.setText("body of email");
		
		javaMailSender.send(mail);
		
	}
	
	public void sendNotificationToVolunteer(Volunteer volToSendTo) throws MailException {
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(volToSendTo.getEmail());
        mail.setFrom("pitchforgood@gmail.com");
        mail.setSubject("Your pitch has been accepted!");
        mail.setText("The organization decicded to accept your project, yay!!!!!!!!!");
        
        javaMailSender.send(mail);
    }
}
