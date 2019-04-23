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
@RequestMapping("/organizations")
public class OrganizationController {

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
	public Collection<Organization> getOrganizations() {
		return (Collection<Organization>) organizationRepo.findAll();
	}
	
	@GetMapping("/{organizationId}")
	public Organization getSingleOrganization(@PathVariable Long organizationId) {
		return organizationRepo.findById(organizationId).get();
	
	}
	
	@PostMapping("/signin")
	public Organization getOrganization(@RequestBody String body) throws JSONException {
		JSONObject returningOrg = new JSONObject(body);
		String username = returningOrg.getString("username");
//		String password = returningVolunteer.getString("password");
//		System.out.println(username);
		Organization organizationToCheck = organizationRepo.findByOrgUserName(username);
		System.out.println(organizationToCheck);
		
		return organizationToCheck;
	}
	
	@DeleteMapping("delete/{organizationId}")
	public Collection<Organization> deleteOrganization(@PathVariable Long organizationId) {
		Organization organizationToDelete = organizationRepo.findById(organizationId).get();
		
		//delete causes in org collection
		organizationToDelete.removeCausesInCollection();
		
		//delete projects in org collection
		organizationToDelete.removeProjectsInCollection();
		
		//find all projects pitched to that org 
		Collection<Project> projects = projectRepo.findAllByOrganization(organizationToDelete);
		
		//find all volunteers related to those projects 
		for (Project project1 : projects) {
			Volunteer volunteer = project1.getVolunteer();
			//and remove the project from their collection of projects
			volunteer.removeProject(project1);
		}
		
		//delete all projects from the repo
		projectRepo.deleteAll(projects);
		
		//delete the organization
		organizationRepo.delete(organizationToDelete);
		return (Collection<Organization>) organizationRepo.findAll();
	}
	
	@PostMapping("/add")
	public Organization addOrganization(@RequestBody String body) throws JSONException {
		JSONObject newOrganization = new JSONObject(body);
		String orgName = newOrganization.getString("orgName");
		String orgLogo = newOrganization.getString("orgLogo");
		String mission = newOrganization.getString("mission");
		String contactPerson = newOrganization.getString("contactPerson");
		String contactEmail = newOrganization.getString("contactEmail");
		String website = newOrganization.getString("orgUrl");
		String orgUserName = newOrganization.getString("orgUserName");
		String orgPassword = newOrganization.getString("orgPassword");
		
		Organization organization = new Organization(orgName, orgLogo, mission, contactPerson, contactEmail, website, orgUserName, orgPassword);
		organizationRepo.save(organization);
		
		ArrayList<String> causes = new ArrayList<String>(); 
		ArrayList<Long> causesToAdd = new ArrayList<Long>();
		JSONArray jsonArray = newOrganization.getJSONArray("causes"); 
		if (jsonArray != null) { 
		   for (int i = 0; i < jsonArray.length(); i++){ 
			   causes.add(jsonArray.get(i).toString());
		   } 
		} 
		if (causes != null) {
			for (String cause : causes) {
				causesToAdd.add((Long.parseLong(cause)));
			}
		}
		for (Long cause : causesToAdd) {
			Cause newCause = causeRepo.findById(cause).get();
		  	organization.addCauseToOrganization(newCause);
		}
		
		organizationRepo.save(organization);
		return organization;
		
	}
	
	private Collection<Volunteer> findAllBySkills(Skill volunteerSkill) {
		// TODO Auto-generated method stub
		return null;
	}
	
}
