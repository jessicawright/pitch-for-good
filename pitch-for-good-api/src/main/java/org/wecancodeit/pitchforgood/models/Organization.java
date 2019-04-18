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
	private String orgLogo;
	@Lob
	private String orgMission;
	private String contactPerson;
	private String orgEmail;
	private String websiteUrl;
	private String orgUserName;
	private String orgPassword;
	@ManyToMany
	private Collection<Cause> causes;
	@OneToMany //(mappedBy="organization")
	
	private Collection<Project> projects;
	
	public Organization() {}

	
	public Organization(String orgName, String orgLogo, String orgMission, String contactPerson, String orgEmail, String websiteUrl, String orgUserName, String orgPassword) {
		this.orgName = orgName;
		this.orgLogo = orgLogo;
		this.orgMission = orgMission;
		this.contactPerson = contactPerson;
		this.orgEmail = orgEmail;
		this.websiteUrl = websiteUrl;
		this.orgUserName = orgUserName;
		this.orgPassword = orgPassword;
		this.causes = new ArrayList<Cause>();
		this.projects = new ArrayList<Project>();
		
	}
	public Long getOrganizationId() {
		return organizationId;
	}
	
	public String getOrgName() {
		return orgName;
	}
	
	public String getOrgLogo() {
		return orgLogo;
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
	
	public String getOrgUserName() {
		return orgUserName;
	}
	
	public String getOrgPassword() {
		return orgPassword;
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


	public void removeProject(Project project) {
		projects.remove(project);
		
	}


	public void removeCause(Cause cause) {
		causes.remove(cause);
		
	}


	public void removeCausesInCollection() {
		causes.removeAll(causes);
		
	}


	public void removeProjectsInCollection() {
		projects.removeAll(projects);
		
	}


	@Override
	public String toString() {
		return "Organization [orgName=" + orgName + "]";
	}

	
}
