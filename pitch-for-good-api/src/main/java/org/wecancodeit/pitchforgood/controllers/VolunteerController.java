package org.wecancodeit.pitchforgood.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	
	@PostMapping("/add")
	public Volunteer addVolunteer(@RequestBody String body) throws JSONException {
		JSONObject newVolunteer = new JSONObject(body);
		String firstName = newVolunteer.getString("firstName");
		String lastName = newVolunteer.getString("lastName");
		String userName = newVolunteer.getString("userName");
		String password = newVolunteer.getString("password");
		String phoneNum = newVolunteer.getString("phoneNum");
		String email = newVolunteer.getString("email");
		String jobTitle = newVolunteer.getString("jobTitle");
		Volunteer volunteer = new Volunteer(firstName, lastName, userName, password, phoneNum, email, jobTitle);
		volunteerRepo.save(volunteer);
		return volunteer;
		
	}
	
	
	
//	@PostMapping("/add")
//	public Volunteer addVolunteer(@RequestBody String body, @RequestParam(value = "skillIds") long[] skillIds, @RequestParam(value = "causeIds") long[] causeIds) throws JSONException {
//		JSONObject newVolunteer = new JSONObject(body);
//		String firstName = newVolunteer.getString("firstName");
//		String lastName = newVolunteer.getString("lastName");
//		String phoneNum = newVolunteer.getString("phoneNum");
//		String email = newVolunteer.getString("email");
//		String jobTitle = newVolunteer.getString("jobTitle");
//		Volunteer volunteer = new Volunteer(firstName, lastName, phoneNum, email, jobTitle);
//		volunteerRepo.save(volunteer);
//		for (Long skill: skillIds) {
//			Skill newSkill = skillRepo.findById(skill).get();
//			volunteer.addSkillToVolunteer(newSkill);
//		}
//		for (Long cause: causeIds) {
//			Cause newCause = causeRepo.findById(cause).get();
//			volunteer.addCauseToVolunteer(newCause);
//		}
//		return volunteer;
//		
//	}
	
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
