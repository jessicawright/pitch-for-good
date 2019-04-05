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
import org.wecancodeit.pitchforgood.models.Organization;
import org.wecancodeit.pitchforgood.models.Project;
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
	
	@PostMapping("/add/{id}")
	public Collection<Project> addProject(@RequestBody String body, @PathVariable Long id) throws JSONException {
		JSONObject newProject = new JSONObject(body);
		String projectName = newProject.getString("projectName");
		String projectDescription = newProject.getString("projectDescription");
		String estimatedDuration = newProject.getString("estimatedDuration");
		boolean status = newProject.getBoolean("status");
		Organization organization = organizationRepo.findByOrgName(newProject.getString("orgName"));
//		Skill skills = skillRepo.findBySkillName(newProject.getString("skills"));
		Volunteer volunteer = volunteerRepo.findById(id).get();
		projectRepo.save(new Project(projectName, projectDescription, estimatedDuration, organization));
		return (Collection<Project>) projectRepo.findAll();
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