package org.wecancodeit.pitchforgood.models;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Organization {
	
	@Id
	@GeneratedValue
	private Long organizationId;
	private String orgName;
	@Lob
	private String orgMission;
	private String contactPerson;
	private String orgEmail;
	private String websiteUrl;
	@ManyToMany
	private Collection<Cause> causes;
	@OneToMany //(mappedBy="organization")
	@JsonIgnore
	private Collection<Project> projects;
	
	public Organization() {}

	
	public Organization(String orgName, String orgMission, String contactPerson, String orgEmail, String websiteUrl) {
		this.orgName = orgName;
		this.orgMission = orgMission;
		this.contactPerson = contactPerson;
		this.orgEmail = orgEmail;
		this.websiteUrl = websiteUrl;
		this.causes = new ArrayList<Cause>();
		this.projects = new ArrayList<Project>();
		
	}
	public Long getOrganizationId() {
		return organizationId;
	}
	
	public String getOrgName() {
		return orgName;
	}
	
	public String getOrgMission() {
		return orgMission;
	}
	
	public String getContactPerson() {
		return contactPerson;
	}
	
	public String getOrgEmail() {
		return orgEmail;
	}
	
	public String getWebsiteUrl() {
		return websiteUrl;
	}
	
	public Collection<Cause> getCauses() {
		return causes;
	}
	
	public Collection<Project> getProjects() {
		return projects;
	}
	
	public void addCauseToOrganization(Cause cause) {
		causes.add(cause);
	}
	
	public void addProjectToOrganization(Project project) {
		projects.add(project);
	}
	
}
