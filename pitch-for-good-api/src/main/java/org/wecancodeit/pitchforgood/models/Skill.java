package org.wecancodeit.pitchforgood.models;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Skill {
	
	@Id
	@GeneratedValue
	private Long skillId;
	private String skillName;
	@ManyToMany (mappedBy="skills")
	@JsonIgnore
	private Collection<Volunteer> volunteers;
	@ManyToMany (mappedBy="skills")
	@JsonIgnore
	private Collection<Project> projects;
	
	public Skill() {}

	public Skill(String skillName) {
		this.skillName = skillName;
		this.volunteers = new ArrayList<Volunteer>();
		this.projects = new ArrayList<Project>();
	}

	public Long getSkillId() {
		return skillId;
	}

	public String getSkillName() {
		return skillName;
	}

	public Collection<Volunteer> getVolunteers() {
		return volunteers;
	}

	public Collection<Project> getProjects() {
		return projects;
	}
	
	

}
