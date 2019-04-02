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
	private String firstName;
	private String lastName;
	private String phoneNum;
	private String email;
	private String jobTitle;
	@ManyToMany
	private Collection<Skill> skills;
	@ManyToMany
	private Collection<Cause> causes;
	@OneToMany(mappedBy="volunteer")
	private Collection<Project> projects;
	
	public Volunteer() {}
	
	
	public Volunteer(String firstName, String lastName, String phoneNum, String email, String jobTitle) {
		this.firstName = firstName;
		this.lastName = lastName;
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
	
}
