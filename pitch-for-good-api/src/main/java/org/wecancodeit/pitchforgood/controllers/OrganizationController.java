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
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.pitchforgood.models.Cause;
import org.wecancodeit.pitchforgood.models.Organization;
import org.wecancodeit.pitchforgood.models.Project;
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
	public Organization getSingleOrganization(@PathVariable Long id) {
		return organizationRepo.findById(id).get();
	
	}
	
	@PostMapping("/add")
	public Collection<Organization> addOrganization(@RequestBody String body) throws JSONException {
		JSONObject newOrganization = new JSONObject(body);
		String orgName = newOrganization.getString("orgName");
		String orgMission = newOrganization.getString("orgMission");
		String contactPerson = newOrganization.getString("contactPerson");
		String orgEmail = newOrganization.getString("orgEmail");
		String websiteUrl = newOrganization.getString("websiteUrl");
		Cause causes = causeRepo.findByCauseName(newOrganization.getString("causeName"));
		Project projects = projectRepo.findByProjectName(newOrganization.getString("projectName"));
		organizationRepo.save(new Organization(orgName, orgMission, contactPerson, orgEmail, websiteUrl));
		return (Collection<Organization>) organizationRepo.findAll();
		
	}
	
	@DeleteMapping("delete/{id}")
	public String deleteOrganization(@PathVariable Long id) {
		Organization organization = organizationRepo.findById(id).get();
		causeRepo.deleteAll(organization.getCauses());
		projectRepo.deleteAll(organization.getProjects());
		organizationRepo.deleteById(id);
		return "";
	}
	
}
