package org.wecancodeit.pitchforgood.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.wecancodeit.pitchforgood.models.Organization;


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
}
