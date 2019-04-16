package org.wecancodeit.pitchforgood.models;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

@Entity
public class Volunteer {
	
	@Id
	@GeneratedValue
	private Long volunteerId;
	private String volUserName;
	private String volPassword;
	private String firstName;
	private String lastName;
	private String phoneNum;
	private String email;
	private String jobTitle;
	@ManyToMany
	
	private Collection<Skill> skills;
	@ManyToMany
	private Collection<Cause> causes;
	@OneToMany
	private Collection<Project> projects;
	
	public Volunteer() {}
	
	
	public Volunteer(String firstName, String lastName, String volUserName, String volPassword, String phoneNum, String email, String jobTitle) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.volUserName = volUserName;
		this.volPassword = volPassword;
		this.phoneNum = phoneNum;
		this.email = email;
		this.jobTitle = jobTitle;
		this.skills = new ArrayList<Skill>();
		this.causes = new ArrayList<Cause>();
		this.projects = new ArrayList<Project>();
	}

	public Long getVolunteerId() {
		return volunteerId;
	}
	
	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}
	
	public String getVolUserName() {
		return volUserName;
	}
	
	public String getVolPassword() {
		return volPassword;
	}

	public String getPhoneNum() {
		return phoneNum;
	}

	public String getEmail() {
		return email;
	}

	public String getJobTitle() {
		return jobTitle;
	}

	public Collection<Skill> getSkills() {
		return skills;
	}

	public Collection<Cause> getCauses() {
		return causes;
	}

	public Collection<Project> getProjects() {
		return projects;
	}

	public void addSkillToVolunteer(Skill skill) {
		skills.add(skill);
	}
	
	public void addCauseToVolunteer(Cause cause) {
		causes.add(cause);
	}
	
	public void addProjectToVolunteer(Project project) {
		projects.add(project);
	}


	public void removeSkill(Skill skill) {
		skills.remove(skill);
		
	}
	
	public void removeSkillsInCollection() {
		skills.removeAll(skills);
	}


	public void removeCause(Cause cause) {
		causes.remove(cause);
		
	}
	
	public void removeCausesInCollection() {
		causes.removeAll(causes);
	}


	public void removeProject(Project project) {
		projects.remove(project);
		
	}
	
	public void removeProjectsInCollection() {
		projects.removeAll(projects);
	}
	
}
