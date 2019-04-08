package org.wecancodeit.pitchforgood.controllers;

import java.util.ArrayList;
import java.util.Collection;

import javax.annotation.Resource;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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
@RequestMapping("/projects")
public class ProjectController {

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
	public Collection<Project> getProjects() {
		return (Collection<Project>) projectRepo.findAll();
	}
	@GetMapping("/{id}")
	public Project getSingleProject(@PathVariable Long id) {
		return projectRepo.findById(id).get();
	}
	
	@PostMapping("/volunteers/{volunteerId}/organizations/{organizationId}")
	public Volunteer addProject(@RequestBody String body, @PathVariable Long volunteerId, @PathVariable Long organizationId) throws JSONException {
		JSONObject newProject = new JSONObject(body);
		System.out.println(newProject);
		String projectName = newProject.getString("projectName");
		String projectDescription = newProject.getString("projectDescription");
		String estimatedDuration = newProject.getString("estimatedDuration");
		JSONArray jsonArray = newProject.getJSONArray("skills"); 
		Organization organization = organizationRepo.findById(organizationId).get();
		Project project = new Project(projectName, projectDescription, estimatedDuration, organization);
		projectRepo.save(project);
		ArrayList<String> skills = new ArrayList<String>(); 
		ArrayList<Long> skillsToAdd = new ArrayList<Long>();
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
		  	project.addSkillToProject(newSkill);
		}
		Volunteer volunteer = volunteerRepo.findById(volunteerId).get();
		//project.addVolunteerToProject(volunteer);
		volunteer.addProjectToVolunteer(project);
		projectRepo.save(new Project(projectName, projectDescription, estimatedDuration, organization));
		volunteerRepo.save(volunteer);
		organizationRepo.save(organization);
		return volunteer;
	}
	
//	@DeleteMapping("delete/{id}")
//	public String deleteProject(@PathVariable Long id) {
//		Project project = projectRepo.findById(id).get();
//		organizationRepo.delete(project.getOrganization());
//		skillRepo.deleteAll(project.getSkills());
//		volunteerRepo.delete(project.getVolunteer());
//		return "";
//	}
	
}