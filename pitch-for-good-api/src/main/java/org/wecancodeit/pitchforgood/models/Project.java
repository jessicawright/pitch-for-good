package org.wecancodeit.pitchforgood.models;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Project {
	
	@Id
	@GeneratedValue
	private Long projectId;
	private String projectName;
	@Lob
	private String projectDescription;
	private String estimatedDuration;
	private LocalDateTime createDate;
	private String status;
	@ManyToOne
	@JsonIgnore
	private Organization organization;
	@ManyToMany
	private Collection<Skill> skills;
	@JsonIgnore
	@ManyToOne
	private Volunteer volunteer;
	

	public Project() {}

	
	public Project(String projectName, String projectDescription, String estimatedDuration, Organization organization, Volunteer volunteer) {
		this.projectName = projectName;
		this.projectDescription = projectDescription;
		this.estimatedDuration = estimatedDuration;
		this.createDate = LocalDateTime.now();
		this.status = "Pitched";
		this.volunteer = volunteer;
		this.organization = organization;
		this.skills = new ArrayList<Skill>();
		
	}
	
	public String getCreateDate() {
		LocalDateTime postDateTime = createDate;
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM-dd-yyyy");
		String formattedStringDate = postDateTime.format(formatter);
		return formattedStringDate;
	}
	
	public Long getProjectId() {
		return projectId;
	}

	public String getProjectName() {
		return projectName;
	}

	public String getProjectDescription() {
		return projectDescription;
	}

	public String getEstimatedDuration() {
		return estimatedDuration;
	}

	
	public String getStatus() {
		return status;
	}

	public Organization getOrganization() {
		return organization;
	}
	
	public Volunteer getVolunteer() {
		return volunteer;
	}

	public Collection<Skill> getSkills() {
		return skills;
	}
	
	public void toggleStatus() {
		this.status = "Accepted";
	}
	
	public void addSkillToProject(Skill skill) {
		skills.add(skill);
	}

	public void removeSkill(Skill skill) {
		skills.remove(skill);
	}

	public void addOrganizationToProject(Organization organization) {
		this.organization = organization;
	}
	
}
