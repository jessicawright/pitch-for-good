package org.wecancodeit.pitchforgood.controllers;

import java.util.ArrayList;
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
import org.wecancodeit.pitchforgood.models.Skill;
import org.wecancodeit.pitchforgood.models.Volunteer;
import org.wecancodeit.pitchforgood.repositories.CauseRepository;
import org.wecancodeit.pitchforgood.repositories.OrganizationRepository;
import org.wecancodeit.pitchforgood.repositories.ProjectRepository;
import org.wecancodeit.pitchforgood.repositories.SkillRepository;
import org.wecancodeit.pitchforgood.repositories.VolunteerRepository;

@CrossOrigin
@RestController
@RequestMapping("/causes")
public class CauseController {
	
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
	public Collection<Cause> getCauses() {
		return (Collection<Cause>) causeRepo.findAll();
	}
	
	@GetMapping("/{causeId}")
	public Cause getSingleCause(@PathVariable Long causeId) {
		return causeRepo.findById(causeId).get();
	}
	
	@GetMapping("/{volunteerId}/add")
	public Collection<Cause> getUnusedCauses(@PathVariable Long volunteerId) {
		Volunteer volunteer = volunteerRepo.findById(volunteerId).get();
		ArrayList<Cause> remainingCauses = new ArrayList<>();
		Collection<Cause> currentCauses = volunteer.getCauses();
		Collection<Cause> allCauses = (Collection<Cause>) causeRepo.findAll();
		
		for(Cause cause : allCauses){
		    if(currentCauses.contains(cause)){
		        continue;
		    }else{
		        remainingCauses.add(cause);
		    }
		} return remainingCauses;
	}
	
	@PostMapping("/add")
	public Collection<Cause> addCause(@RequestBody String body) throws JSONException {
		JSONObject newCause = new JSONObject(body);
		String causeName = newCause.getString("causeName");
		String causeDescription = newCause.getString("causeDescription");
		causeRepo.save(new Cause(causeName, causeDescription));
		return (Collection<Cause>) causeRepo.findAll();
	}
}
