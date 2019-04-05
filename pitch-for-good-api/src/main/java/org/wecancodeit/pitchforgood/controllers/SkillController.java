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
import org.wecancodeit.pitchforgood.models.Skill;
import org.wecancodeit.pitchforgood.repositories.CauseRepository;
import org.wecancodeit.pitchforgood.repositories.OrganizationRepository;
import org.wecancodeit.pitchforgood.repositories.ProjectRepository;
import org.wecancodeit.pitchforgood.repositories.SkillRepository;
import org.wecancodeit.pitchforgood.repositories.VolunteerRepository;

@CrossOrigin
@RestController
@RequestMapping("/skills")
public class SkillController {
	
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
	public Collection<Skill> getSkills() {
		return (Collection<Skill>) skillRepo.findAll();
	}
	@GetMapping("/{skillId}")
	public Skill getSingleSkill(@PathVariable Long id) {
		return skillRepo.findById(id).get();
	}
	
	@PostMapping("/add")
	public Collection<Skill> addSkill(@RequestBody String body) throws JSONException {
		JSONObject newSkill = new JSONObject(body);
		String skillName = newSkill.getString("skillName");
		skillRepo.save(new Skill(skillName));
		return (Collection<Skill>) skillRepo.findAll();
	}

}
