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
		
		Cause cause1 = causeRepo.save(new Cause("Animal Welfare and Services", "Working towards a more humane treatment for all animals."));
		Cause cause2 = causeRepo.save(new Cause("Arts, Culture, Humanities", "Promoting a society based in education and creativity."));
		Cause cause3 = causeRepo.save(new Cause("Community Development", "Community members coming together to take collective action to solve community problems."));
		Cause cause4 = causeRepo.save(new Cause("Education", "Engaging in the facilitation of learning and the accumulation of knowledge."));
		Cause cause5 = causeRepo.save(new Cause("Environment", "Protecting our planet and its natural resources."));
		Cause cause6 = causeRepo.save(new Cause("Health", "Committed to progressing society towards the pursuit of physical and mental well-being."));
		Cause cause7 = causeRepo.save(new Cause("Human and Civil Rights", "Promoting fair and just treatment for all human beings."));
		Cause cause8 = causeRepo.save(new Cause("Children's and Family Services", "Overseeing the protection and nurturing of all children."));
		Cause cause9 = causeRepo.save(new Cause("Youth Development and Crisis Services", "Concerned with the welfare of children and families in crisis."));
		Cause cause10 = causeRepo.save(new Cause("Hunger", "Guided towards the sufficient feeding of the community."));
		Cause cause11 = causeRepo.save(new Cause("Homeless Services", "Providing shelter, food, and treatments for the homeless community."));
		Cause cause12 = causeRepo.save(new Cause("International Services", "Assisting refugees, immigrants and new citizens to overcome social, cultural and economic issues."));
		Cause cause13 = causeRepo.save(new Cause("Public Policy", "Working towards the promotion of a more just society through legislation and governance."));
		Cause cause14 = causeRepo.save(new Cause("Religion", "Promote and support particular religions, religious activity and worship."));
		
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
		

		Organization organization1 = organizationRepo.save(new Organization("Ohio Environmental Council","OhioEnvironmentalCouncilLogo.png", "The Ohio Environmental Council is the state's most comprehensive, effective and respected environmental advocate for a healthier, more sustainable Ohio. "
				+ "Our experts work daily to restore, protect, and strengthen the quality of life for families and communities, from the air we breathe and the water we drink to the food we eat and natural resources we enjoy.", 
				"Tamaliyapo Mphande", "pitchforgood@gmail.com", "https://theoec.org/", "username1", "password"));
		Organization organization2 = organizationRepo.save(new Organization("Columbus Gives Back", "ColumbusGivesBack_Logo.png", "We're proud to partner with so many local organizations, but the heart of Columbus Gives Back is our leadership team." +
				 " We strive to create a welcoming, engaging, and fun experience for you at every event, something that sets CGB apart from other volunteer opportunities.","Taylor Putnam-Majarian", "pitchforgood@gmail.com", "https://columbusgivesback.org/", "username2", "password"));
		Organization organization3 = organizationRepo.save(new Organization("See Kids Dream", "SeeKidsDream_Logo.png","See Kids Dream is focused on ensuring every person has the opportunity to achieve his or her fullest potential to contribute to a thriving community." + 
				" See Kids Dream's mission is to empower youth with the skills, motivation and confidence to make our world a better place.", "Cynthia Armstrong", "pitchforgood@gmail.com", "http://seekidsdream.org/", "username3", "password"));
		Organization organization4 = organizationRepo.save(new Organization("Children's Hunger Alliance", "ChildrensHungerAlliance_Logo.png","We partner with organizations throughout Ohio to provide nutritious meals to at-risk children who need them most." + 
				" We help day care providers, day care centers, local school districts and afterschool and summer programs provide balanced, healthy meals to children in their care. Our team of educators also deliver nutrition education and lead children in physical activities to provide a balanced approach to childhood health.", "Adrienne Galloway", "pitchforgood@gmail.com", "https://childrenshungeralliance.org/", "username4", "password"));
		Organization organization5 = organizationRepo.save(new Organization("Tech Corps", "TechCorps_Logo.png", "To create a technologically literate society in which all K-12 students have equal access to the technology skills, "
				+ "programs and resources that will enrich their education today and prepare them for college or career tomorrow.", "Jess", "pitchforgood@gmail.com", "http://www.techcorps.org/", "username5", "password"));
		Organization organization6 = organizationRepo.save(new Organization("Mid-Ohio Food Bank", "MidOhioFoodbank_Logo.png", 
				"At Mid-Ohio Foodbank, we find it unacceptable for thousands of our neighbors, most of them children and seniors, to go hungry. "
				+ "We aim to provide efficient, effective ways for hungry people to meet their basic food and nutrition needs.", "Marilyn Tomasi", "pitchforgood@gmail.com", "https://www.midohiofoodbank.org", "username6", "password"));
		
		Volunteer volunteer1 = volunteerRepo.save(new Volunteer("John", "Smith", "username1", "password", "8675309", "pitchforgood@gmail.com", "Teacher"));
		Volunteer volunteer2 = volunteerRepo.save(new Volunteer("Stuart", "Clark", "username2", "password", "8671111", "pitchforgood@gmail.com", "Chef"));
		Volunteer volunteer3 = volunteerRepo.save(new Volunteer("Ivan", "Ford", "username3", "password","8672222", "pitchforgood@gmail.com", "Veterinarian"));
		Volunteer volunteer4 = volunteerRepo.save(new Volunteer("Lila", "Jones", "username4", "password","8673333", "pitchforgood@gmail.com", "Software Developer"));
		Volunteer volunteer5 = volunteerRepo.save(new Volunteer("Peggy", "Peggerson", "username5", "password","8674444", "pitchforgood@gmail.com", "Accountant"));
		
		
		Project project1 = projectRepo.save(new Project("Dog Park", "We're building a dog park at the community center!", "3 months", organization3, volunteer1));
		Project project2 = projectRepo.save(new Project("Free Software Class for Kids", "We're having a free software summer class series at the library!", "3 months", organization5, volunteer2));
		Project project3 = projectRepo.save(new Project("Trash Cleanup", "We're picking up trash along the creek in our park.", "1 week", organization1, volunteer3));
		
		project1.addSkillToProject(skill2);
		projectRepo.save(project1);
		organization5.addProjectToOrganization(project2);
		organization3.addProjectToOrganization(project1);
		organization1.addCauseToOrganization(cause5);
		organization2.addCauseToOrganization(cause3);
		organization3.addCauseToOrganization(cause9);
		organization3.addCauseToOrganization(cause4);
		organization4.addCauseToOrganization(cause10);
		organization4.addCauseToOrganization(cause8);
		organization5.addCauseToOrganization(cause2);
		organization5.addCauseToOrganization(cause4);
		organization6.addCauseToOrganization(cause8);
		organization6.addCauseToOrganization(cause10);
		organization6.addCauseToOrganization(cause11);
		organizationRepo.save(organization1);
		organizationRepo.save(organization2);
		organizationRepo.save(organization3);
		organizationRepo.save(organization4);
		organizationRepo.save(organization5);
		
		volunteer1.addProjectToVolunteer(project1);
		volunteer1.addCauseToVolunteer(cause1);
		volunteer1.addSkillToVolunteer(skill1);
		volunteer1.addSkillToVolunteer(skill2);
		volunteer1.addSkillToVolunteer(skill3);
		volunteer1.addSkillToVolunteer(skill4);
		volunteer1.addSkillToVolunteer(skill5);
		volunteer1.addSkillToVolunteer(skill16);
		volunteer1.addSkillToVolunteer(skill17);
		volunteer1.addSkillToVolunteer(skill18);
		volunteer1.addSkillToVolunteer(skill19);
		volunteer1.addSkillToVolunteer(skill20);
		volunteerRepo.save(volunteer1);
		volunteer2.addProjectToVolunteer(project2);
		volunteer2.addSkillToVolunteer(skill6);
		volunteer2.addSkillToVolunteer(skill7);
		volunteer2.addSkillToVolunteer(skill8);
		volunteer2.addSkillToVolunteer(skill9);
		volunteer2.addSkillToVolunteer(skill10);
		volunteer2.addSkillToVolunteer(skill22);
		volunteer2.addSkillToVolunteer(skill23);
		volunteer2.addSkillToVolunteer(skill24);
		volunteer2.addSkillToVolunteer(skill25);
		volunteer2.addSkillToVolunteer(skill26);
		volunteerRepo.save(volunteer2);
		volunteer3.addSkillToVolunteer(skill11);
		volunteer3.addSkillToVolunteer(skill12);
		volunteer3.addSkillToVolunteer(skill13);
		volunteer3.addSkillToVolunteer(skill14);
		volunteer3.addSkillToVolunteer(skill15);
		volunteer3.addSkillToVolunteer(skill1);
		volunteer3.addSkillToVolunteer(skill2);
		volunteer3.addSkillToVolunteer(skill3);
		volunteer3.addSkillToVolunteer(skill4);
		volunteer3.addSkillToVolunteer(skill5);
		volunteerRepo.save(volunteer3);
		volunteer4.addSkillToVolunteer(skill16);
		volunteer4.addSkillToVolunteer(skill17);
		volunteer4.addSkillToVolunteer(skill18);
		volunteer4.addSkillToVolunteer(skill19);
		volunteer4.addSkillToVolunteer(skill20);
		volunteer4.addSkillToVolunteer(skill6);
		volunteer4.addSkillToVolunteer(skill7);
		volunteer4.addSkillToVolunteer(skill8);
		volunteer4.addSkillToVolunteer(skill9);
		volunteer4.addSkillToVolunteer(skill10);
		volunteerRepo.save(volunteer4);
		volunteer5.addSkillToVolunteer(skill21);
		volunteer5.addSkillToVolunteer(skill22);
		volunteer5.addSkillToVolunteer(skill23);
		volunteer5.addSkillToVolunteer(skill24);
		volunteer5.addSkillToVolunteer(skill25);
		volunteer5.addSkillToVolunteer(skill26);
		volunteer5.addSkillToVolunteer(skill11);
		volunteer5.addSkillToVolunteer(skill12);
		volunteer5.addSkillToVolunteer(skill13);
		volunteer5.addSkillToVolunteer(skill14);
		volunteer5.addSkillToVolunteer(skill15);
		volunteerRepo.save(volunteer5);
	}

}
