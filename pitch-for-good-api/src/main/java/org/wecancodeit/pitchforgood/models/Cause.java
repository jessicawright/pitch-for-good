package org.wecancodeit.pitchforgood.models;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;

@Entity
public class Cause {
	@Id
	@GeneratedValue
	private Long causeId;
	private String causeName;
	@Lob
	private String causeDescription;
	@ManyToMany
	private Collection<Organization> organizations;
	@ManyToMany
	private Collection<Volunteer> volunteers;
	
	
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
	
	

}
