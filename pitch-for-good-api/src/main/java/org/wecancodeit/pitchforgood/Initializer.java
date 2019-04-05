package org.wecancodeit.pitchforgood;

import java.time.LocalDateTime;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;
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

@Service
public class Initializer implements CommandLineRunner {

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
	
	@Override
	public void run(String... args) throws Exception {
		
		Cause cause1 = causeRepo.save(new Cause("Animal Welfare and Services", ""));
		Cause cause2 = causeRepo.save(new Cause("Arts, Culture, Humanities", ""));
		Cause cause3 = causeRepo.save(new Cause("Community Development", ""));
		Cause cause4 = causeRepo.save(new Cause("Education", ""));
		Cause cause5 = causeRepo.save(new Cause("Environment", ""));
		Cause cause6 = causeRepo.save(new Cause("Health", ""));
		Cause cause7 = causeRepo.save(new Cause("Human and Civil Rights", ""));
		Cause cause8 = causeRepo.save(new Cause("Children's and Family Services", ""));
		Cause cause9 = causeRepo.save(new Cause("Youth Development, Shelter, and Crisis Services", ""));
		Cause cause10 = causeRepo.save(new Cause("Hunger", ""));
		Cause cause11 = causeRepo.save(new Cause("Homeless Services", ""));
		Cause cause12 = causeRepo.save(new Cause("International Services", ""));
		Cause cause13 = causeRepo.save(new Cause("Public Policy", ""));
		Cause cause14 = causeRepo.save(new Cause("Religion", ""));
		
		Skill skill1 = skillRepo.save(new Skill("Childcare"));
		Skill skill2 = skillRepo.save(new Skill("Animal Care"));
		Skill skill3 = skillRepo.save(new Skill("Legal Knowledge"));
		Skill skill4 = skillRepo.save(new Skill("Carpentry"));
		Skill skill5 = skillRepo.save(new Skill("Education"));
		Skill skill6 = skillRepo.save(new Skill("Technology"));
		Skill skill7 = skillRepo.save(new Skill("Culinary Arts"));
		Skill skill8 = skillRepo.save(new Skill("Visual Arts"));
		Skill skill9 = skillRepo.save(new Skill("Music"));
		Skill skill10 = skillRepo.save(new Skill("Healthcare"));
		Skill skill11 = skillRepo.save(new Skill("ESL"));
		Skill skill12 = skillRepo.save(new Skill("Bilingual"));
		Skill skill13 = skillRepo.save(new Skill("Horticulture"));
		Skill skill14 = skillRepo.save(new Skill("Logistics"));
		Skill skill15 = skillRepo.save(new Skill("Engineering"));
		Skill skill16 = skillRepo.save(new Skill("Routing"));
		Skill skill17 = skillRepo.save(new Skill("Graphic Design"));
		Skill skill18 = skillRepo.save(new Skill("MBA"));
		Skill skill19 = skillRepo.save(new Skill("CPA"));
		Skill skill20 = skillRepo.save(new Skill("Finance"));
		Skill skill21 = skillRepo.save(new Skill("Healthcare"));
		Skill skill22 = skillRepo.save(new Skill("Fundraising"));
		Skill skill23 = skillRepo.save(new Skill("Career Coaching"));
		Skill skill24 = skillRepo.save(new Skill("Counseling"));
		Skill skill25 = skillRepo.save(new Skill("Addiction Services"));
		Skill skill26 = skillRepo.save(new Skill("Real Estate"));
		Skill skill27 = skillRepo.save(new Skill("Fitness"));
		
		Organization organization1 = organizationRepo.save(new Organization("Ohio Environmental Council", "We want to protect the environment.", "Jason", "jason@gmail.com", "jason.com"));
		Organization organization2 = organizationRepo.save(new Organization("Columbus Literacy Council", "We want to help ESL students learn English.", "Ariel", "ariel@gmail.com", "ariel.com"));
		Organization organization3 = organizationRepo.save(new Organization("Ohio House Rabbit Rescue", "We want to protect the rabbits.", "Adam", "adam@gmail.com", "adam.com"));
		Organization organization4 = organizationRepo.save(new Organization("Children's Hunger Alliance", "We want to help families get food.", "Ben", "ben@gmail.com", "ben.com"));
		Organization organization5 = organizationRepo.save(new Organization("Tech Corps", "We want to help kids gain access to learning technological skills.", "Jess", "jess@gmail.com", "jess.com"));
		
		Volunteer volunteer1 = volunteerRepo.save(new Volunteer("John", "Smith", "username1", "password", "8675309", "johnsmith@gmail.com", "Teacher"));
		Volunteer volunteer2 = volunteerRepo.save(new Volunteer("Stuart", "Little", "username2", "password", "8671111", "stuartlittle@gmail.com", "Cheese Chef"));
		Volunteer volunteer3 = volunteerRepo.save(new Volunteer("Ivan", "Ford", "username3", "password","8672222", "ivanford@gmail.com", "Veterinarian"));
		Volunteer volunteer4 = volunteerRepo.save(new Volunteer("Lila", "Jones", "username4", "password","8673333", "lilajones@gmail.com", "Software Developer"));
		Volunteer volunteer5 = volunteerRepo.save(new Volunteer("Peggy", "Peggerson", "username5", "password","8674444", "pegpeg@gmail.com", "Accountant"));
		
		
		
		
		Project project1 = projectRepo.save(new Project("Dog Park", "We're building a dog park at the community center!", "3 months", organization3));
		Project project2 = projectRepo.save(new Project("Free Software Class for Kids", "We're having a free software summer class series at the library!", "3 months", organization5));
		Project project3 = projectRepo.save(new Project("Trash Cleanup", "We're picking up trash along the creek in our park.", "1 week", organization1));
		
		project1.addSkillToProject(skill2);
		projectRepo.save(project1);
		organization1.addCauseToOrganization(cause1);
		organization1.addProjectToOrganization(project2);
		organization3.addProjectToOrganization(project1);
		organization3.addCauseToOrganization(cause1);
		organizationRepo.save(organization1);
		organizationRepo.save(organization3);
		volunteer1.addProjectToVolunteer(project1);
		volunteer1.addCauseToVolunteer(cause1);
		volunteer1.addSkillToVolunteer(skill1);
		volunteerRepo.save(volunteer1);
	
	}

}
