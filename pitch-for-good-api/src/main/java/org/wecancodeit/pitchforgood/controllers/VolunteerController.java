package org.wecancodeit.pitchforgood.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.pitchforgood.models.Cause;
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
@RequestMapping
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
	public Collection<Volunteer> addVolunteer(@RequestBody String body) throws JSONException {
		JSONObject newVolunteer = new JSONObject(body);
		String firstName = newVolunteer.getString("firstName");
		String lastName = newVolunteer.getString("lastName");
		String phoneNum = newVolunteer.getString("phoneNum");
		String email = newVolunteer.getString("email");
		String jobTitle = newVolunteer.getString("jobTitle");
		Skill skills = skillRepo.findBySkillName(newVolunteer.getString("skillName"));
		Cause causes = causeRepo.findByCauseName(newVolunteer.getString("causeName"));
		Project projects = projectRepo.findByProjectName(newVolunteer.getString("projectName"));
		volunteerRepo.save(new Volunteer(firstName, lastName, phoneNum, email, jobTitle));
		return (Collection<Volunteer>) volunteerRepo.findAll();
		
	}
}
