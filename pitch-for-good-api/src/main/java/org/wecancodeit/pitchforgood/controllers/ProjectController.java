package org.wecancodeit.pitchforgood.controllers;

import java.util.ArrayList;
import java.util.Collection;

import javax.annotation.Resource;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
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
import org.wecancodeit.pitchforgood.service.NotificationService;

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
	
	private Logger logger = LoggerFactory.getLogger(ProjectController.class);
	@Autowired
	private NotificationService notificationService;
	
	@GetMapping("")
	public Collection<Project> getProjects() {
		return (Collection<Project>) projectRepo.findAll();
	}
	@GetMapping("/{id}")
	public Project getSingleProject(@PathVariable Long id) {
		return projectRepo.findById(id).get();
	}
	
	@PostMapping("/add")
	public Volunteer addProject(@RequestBody String body) throws JSONException {
		JSONObject newProject = new JSONObject(body);
		String projectName = newProject.getString("projectName");
		String projectDescription = newProject.getString("projectDescription");
		String estimatedDuration = newProject.getString("estimatedDuration");
		String volunteer = newProject.getString("volunteerSubmitId");
		String organization = newProject.getString("orgSubmitId");
		JSONArray jsonArray = newProject.getJSONArray("skills"); 
		
		System.out.println(newProject);
		
		Long projectOwner = Long.parseLong(volunteer);
		Volunteer finalVolunteer = volunteerRepo.findById(projectOwner).get();

		Long pitchedOrg = Long.parseLong(organization);
		Organization finalOrganization = organizationRepo.findById(pitchedOrg).get();
		
		Project project = new Project(projectName, projectDescription, estimatedDuration, finalOrganization, finalVolunteer);
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
		projectRepo.save(project);
		
		finalVolunteer.addProjectToVolunteer(project);
		volunteerRepo.save(finalVolunteer);
		finalOrganization.addProjectToOrganization(project);
		organizationRepo.save(finalOrganization);
		
		System.out.println("|"+finalOrganization.getOrgEmail()+"|" );
		try {
			notificationService.sendNotification(finalOrganization);
		}catch(MailException e) {
			// catch error
			logger.info("error sending:" + e.getMessage());
		}
		return finalVolunteer;
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