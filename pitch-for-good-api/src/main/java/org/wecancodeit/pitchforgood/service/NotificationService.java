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
		mail.setSubject("You've received a project pitch from a volunteer!");
		mail.setText("A volunteer on Pitch for Good has submitted a project proposal for your organization! Log in on the website to see details of the project pitch, and to accept the project idea if you are interested.");
		
		javaMailSender.send(mail);
		
	}
	
	public void sendNotificationToVolunteer(Volunteer volToSendTo) throws MailException {
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(volToSendTo.getEmail());
        mail.setFrom("pitchforgood@gmail.com");
        mail.setSubject("Your pitch has been accepted by the non-profit!");
        mail.setText("The non-profit organization that you pitched a project to on Pitch for Good has accepted your proposal! Log in on the website to get their contact information and email them to start planning the project.");
        
        javaMailSender.send(mail);
    }
}
