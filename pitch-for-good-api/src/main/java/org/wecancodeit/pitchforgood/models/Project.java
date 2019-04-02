package org.wecancodeit.pitchforgood.models;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;

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
	private String location;
	private Organization organization;
	@ManyToMany(mappedBy="projects")
	@JsonIgnore
	private Collection<Skill> skills;
	
	public Project(String projectName, String projectDescription, String estimatedDuration, LocalDateTime createDate, String location, Organization organization) {
		this.projectName = projectName;
		this.projectDescription = projectDescription;
		this.estimatedDuration = estimatedDuration;
		this.createDate = createDate;
		this.location = location;
		this.organization = organization;
		this.skills = new ArrayList<Skill>();
	}
	
	public Project() {}

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

	public LocalDateTime getCreateDate() {
		return createDate;
	}

	public String getLocation() {
		return location;
	}

	public Organization getOrganization() {
		return organization;
	}

	public Collection<Skill> getSkills() {
		return skills;
	}
	
	
	
}
