package org.wecancodeit.pitchforgood.controllers;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

import javax.annotation.Resource;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.pitchforgood.models.Cause;
import org.wecancodeit.pitchforgood.models.Organization;
import org.wecancodeit.pitchforgood.models.Project;
import org.wecancodeit.pitchforgood.models.Skill;
import org.wecancodeit.pitchforgood.models.Volunteer;
import org.wecancodeit.pitchforgood.repositories.CauseRepository;
import org.wecancodeit.pitchforgood.repositories.OrganizationRepository;
import org.wecancodeit.pitchforgood.repositories.ProjectRepository;
import org.wecancodeit.pitchforgood.repositories.SkillRepository;
import org.wecancodeit.pitchforgood.repositories.VolunteerRepository;

@CrossOrigin
@RestController
@RequestMapping("/volunteers")
public class VolunteerController {
	
	@Resource
	VolunteerRepository volunteerRepo;
	@Resource
	SkillRepository skillRepo;
	@Resource
	OrganizationRepository organizationRepo;
	@Resource
	ProjectRepository projectRepo;
	@Resource
	CauseRepository causeRepo;
	
	@GetMapping("")
	public Collection<Volunteer> getVolunteers() {
		return (Collection<Volunteer>) volunteerRepo.findAll();
	}
	
	@PostMapping("/signin")
	public Volunteer getVolunteer(@RequestBody String body) throws JSONException {
		JSONObject returningVolunteer = new JSONObject(body);
		String username = returningVolunteer.getString("username");
//		String password = returningVolunteer.getString("password");
//		System.out.println(username);
		Volunteer volunteerToCheck = volunteerRepo.findByVolUserName(username);
//		System.out.println(volunteerToCheck.getFirstName());
		
		return volunteerToCheck;
	}
	
	@GetMapping("/{id}")
	public Volunteer getSingleVolunteer(@PathVariable Long id) {
		return volunteerRepo.findById(id).get();
	}
	
	@PostMapping("/add/skills")
	public Volunteer addAdditionalSkillsToVolunteer(@RequestBody String body) throws JSONException {
		JSONObject skills = new JSONObject(body);
		String volId = skills.getString("volId");
		Long volIdLong = (Long.parseLong(volId));
		Volunteer volunteer = volunteerRepo.findById(volIdLong).get();
		ArrayList<String> skill = new ArrayList<String>(); 
		ArrayList<Long> skillsToAdd = new ArrayList<Long>();
		JSONArray jsonArray = skills.getJSONArray("skills"); 
		if (jsonArray != null) { 
			   for (int i = 0; i < jsonArray.length(); i++){ 
				   skill.add(jsonArray.get(i).toString());
			   } 
			} 
		if (skills != null) {
			for (String skill1 : skill) {
				skillsToAdd.add((Long.parseLong(skill1)));
			}
		}
		for (Long skill2 : skillsToAdd) {
			Skill skillToAdd = skillRepo.findById(skill2).get();
		  	volunteer.addSkillToVolunteer(skillToAdd);
		  	volunteerRepo.save(volunteer);
		}
		
		return volunteer;
	} 
	
	
	@PostMapping("/add/causes")
	public Volunteer addAdditionalCausesToVolunteer(@RequestBody String body) throws JSONException {
		JSONObject causes = new JSONObject(body);
		String volId = causes.getString("volId");
		Long volIdLong = (Long.parseLong(volId));
		Volunteer volunteer = volunteerRepo.findById(volIdLong).get();
		ArrayList<String> cause = new ArrayList<String>(); 
		ArrayList<Long> causesToAdd = new ArrayList<Long>();
		JSONArray jsonArray = causes.getJSONArray("causes"); 
		if (jsonArray != null) { 
			   for (int i = 0; i < jsonArray.length(); i++){ 
				   cause.add(jsonArray.get(i).toString());
			   } 
			} 
		if (causes != null) {
			for (String cause1 : cause) {
				causesToAdd.add((Long.parseLong(cause1)));
			}
		}
		for (Long cause2 : causesToAdd) {
			Cause causeToAdd = causeRepo.findById(cause2).get();
		  	volunteer.addCauseToVolunteer(causeToAdd);
		  	volunteerRepo.save(volunteer);
		}
		return volunteer;
	} 
	
	
	@GetMapping("/{id}/organizations")
	public Collection<Organization> getOrganizationsAsVolunteer(@PathVariable Long id) {
		volunteerRepo.findById(id).get();
		return (Collection<Organization>) organizationRepo.findAll();
	}
	
	@GetMapping("/{volunteerId}/organizations/{organizationId}")
	public Organization getSpecificOrganizationAsVolunteer(@PathVariable Long volunteerId, @PathVariable Long organizationId) {
		volunteerRepo.findById(volunteerId).get();
		return organizationRepo.findById(organizationId).get();
	}
	
	
	@PostMapping("/add")
	public Volunteer addVolunteer(@RequestBody String body) throws JSONException {
		JSONObject newVolunteer = new JSONObject(body);
		String firstName = newVolunteer.getString("firstName");
		String lastName = newVolunteer.getString("lastName");
		String volUserName = newVolunteer.getString("volUserName");
		String volPassword = newVolunteer.getString("volPassword");
		String phoneNum = newVolunteer.getString("phoneNum");
		String email = newVolunteer.getString("email");
		String jobTitle = newVolunteer.getString("jobTitle");
		
		Volunteer volunteer = new Volunteer(firstName, lastName, volUserName, volPassword, phoneNum, email, jobTitle);
		volunteerRepo.save(volunteer);
		
		ArrayList<String> skills = new ArrayList<String>(); 
		ArrayList<Long> skillsToAdd = new ArrayList<Long>();
		JSONArray jsonArray = newVolunteer.getJSONArray("skills"); 
		if (jsonArray != null) { 
		   for (int i = 0; i < jsonArray.length(); i++){ 
			   skills.add(jsonArray.get(i).toString());
		   } 
		} 
		if (skills != null) {
			for (String skill : skills) {
				skillsToAdd.add((Long.parseLong(skill)));
			}
		}
		for (Long skill : skillsToAdd) {
			Skill newSkill = skillRepo.findById(skill).get();
		  	volunteer.addSkillToVolunteer(newSkill);
		}
		
		ArrayList<String> causes = new ArrayList<String>(); 
		ArrayList<Long> causesToAdd = new ArrayList<Long>();
		JSONArray jsonArrayTwo = newVolunteer.getJSONArray("causes"); 
		if (jsonArrayTwo != null) { 
		   for (int i = 0; i < jsonArrayTwo.length(); i++){ 
			   causes.add(jsonArrayTwo.get(i).toString());
		   } 
		} 
		if (causes != null) {
			for (String cause : causes) {
				causesToAdd.add((Long.parseLong(cause)));
			}
		}
		for (Long cause : causesToAdd) {
			Cause newCause = causeRepo.findById(cause).get();
		  	volunteer.addCauseToVolunteer(newCause);
		}
		
		volunteerRepo.save(volunteer);
		return volunteer;
		
	}
	
	@DeleteMapping("delete/{volunteerId}")
	public Collection<Volunteer> deleteVolunteer(@PathVariable Long volunteerId) {
		System.out.println(volunteerId);
		Volunteer volunteerToDelete = volunteerRepo.findById(volunteerId).get();
		Collection<Project> projectsToDelete = projectRepo.findAllByVolunteer(volunteerToDelete);
		System.out.println(volunteerToDelete);
		
		volunteerToDelete.removeSkillsInCollection();
		volunteerToDelete.removeCausesInCollection();
		volunteerToDelete.removeProjectsInCollection();
		projectRepo.deleteAll(projectsToDelete);
		volunteerRepo.delete(volunteerToDelete);
		return (Collection<Volunteer>) volunteerRepo.findAll();
	}

	
}
