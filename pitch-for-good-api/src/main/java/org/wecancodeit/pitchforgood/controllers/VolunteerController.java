package org.wecancodeit.pitchforgood.controllers;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Collection;

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
	@GetMapping("/{volunteerId}")
	public Volunteer getSingleVolunteer(@PathVariable Long id) {
		return volunteerRepo.findById(id).get();
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
		
		System.out.println(newVolunteer);
		volunteerRepo.save(volunteer);
		return volunteer;
		
	}
	
	@DeleteMapping("delete/{id}")
	public String deleteVolunteer(@PathVariable Long id) {
		Volunteer volunteer = volunteerRepo.findById(id).get();
		skillRepo.deleteAll(volunteer.getSkills());
		causeRepo.deleteAll(volunteer.getCauses());
		projectRepo.deleteAll(volunteer.getProjects());
		volunteerRepo.deleteById(id);
		return "";
	}
}
