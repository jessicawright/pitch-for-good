package org.wecancodeit.pitchforgood.models;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Cause {
	@Id
	@GeneratedValue
	private Long causeId;
	private String causeName;
	@Lob
	private String causeDescription;
	@ManyToMany (mappedBy="causes")
	@JsonIgnore
	private Collection<Organization> organizations;
	@ManyToMany(mappedBy="causes")
	@JsonIgnore
	private Collection<Volunteer> volunteers;
	
	public Cause() {}
	
	public Cause(String causeName, String causeDescription) {
		this.causeName = causeName;
		this.causeDescription = causeDescription;
		this.organizations = new ArrayList<Organization>();
		this.volunteers = new ArrayList<Volunteer>();
	}


	public Long getCauseId() {
		return causeId;
	}


	public String getCauseName() {
		return causeName;
	}


	public String getCauseDescription() {
		return causeDescription;
	}


	public Collection<Organization> getOrganizations() {
		return organizations;
	}


	public Collection<Volunteer> getVolunteers() {
		return volunteers;
	}

	public void addOrganization(Organization organization) {
		organizations.add(organization);
		
	}
	public void addVolunteer(Volunteer volunteer) {
		volunteers.add(volunteer);
	}

	public void removeOrganization(Organization organization) {
		organizations.remove(organization);
		
	}

	public void removeVolunteer(Volunteer volunteer) {
		volunteers.remove(volunteer);
		
	}
	
	

}
