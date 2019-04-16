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
		
		Organization organization1 = organizationRepo.save(new Organization("Ohio Environmental Council", "https://theoec.org/wp-content/uploads/2019/02/fifty_logo.png","The Ohio Environmental Council is the state’s most comprehensive, effective and respected environmental advocate for a healthier, more sustainable Ohio. "
				+ "Our experts work daily to restore, protect, and strengthen the quality of life for families and communities—from the air we breathe and the water we drink to the food we eat and natural resources we enjoy.", 
				"TAMALIYAPO MPHANDE", "jsunh98@gmail.com", " OEC@theOEC.org", "username1", "password"));
		Organization organization2 = organizationRepo.save(new Organization("Columbus Gives Back", "https://columbusgivesback.org/wp-content/uploads/2018/01/CGB-Logo.png","We’re proud to partner with so many local organizations, but the heart of Columbus Gives Back is our leadership team. We strive to create a welcoming, engaging, and fun experience for you at every event – something that sets CGB apart from other volunteer opportunities.",
				 "Taylor Putnam-Majarian", "jsunh98@gmail.com", "www.columbusgivesback.org", "username2", "password"));
		Organization organization3 = organizationRepo.save(new Organization("See Kids Dream", "http://seekidsdream.org/wp-content/themes/seekidsdream/img/images/logo.png","To empower youth with the skills, motivation and confidence" + 
				"to make the world a better place", "Cynthia Armstrong", "jsunh98@gmail.com", "http://seekidsdream.org", "username3", "password"));
		Organization organization4 = organizationRepo.save(new Organization("Children's Hunger Alliance", "https://childrenshungeralliance.org/wp-content/uploads/2016/08/CHA-Logo_NoTag_Transparent-e1480374378812.png","Our mission is to ensure that children" + 
				"without access receive healthy food, nutrition education, and physical activity.", "Adrienne Galloway", "jsunh98@gmail.com", "childrenshungeralliance.org", "username4", "password"));
		Organization organization5 = organizationRepo.save(new Organization("Tech Corps", "http://www.techcorps.org/sites/default/files/tclogo250.png","To create a technologically literate society in which all K-12 students have equal access to the technology skills, "
				+ "programs and resources that will enrich their education today and prepare them for college or career tomorrow.", "Jess", "jsunh98@gmail.com", "http://www.techcorps.org", "username5", "password"));
		Organization organization6 = organizationRepo.save(new Organization("Mid Ohio Food Bank", "https://www.midohiofoodbank.org/wordpress/wp-content/themes/MOFB_Ibel_Agency_Child_Theme/img/image002.jpeg", 
				"At Mid-Ohio Foodbank, we find it unacceptable for thousands of our neighbors—most of them children and seniors—to go hungry. "
				+ "We aim to provide efficient, effective ways for hungry people to meet their basic food and nutrition needs.", "info", "info@midohiofoodbank.org", "www.midohiofoodbank.org", null, null));
		
		Volunteer volunteer1 = volunteerRepo.save(new Volunteer("John", "Smith", "username1", "password", "8675309", "johnsmith@gmail.com", "Teacher"));
		Volunteer volunteer2 = volunteerRepo.save(new Volunteer("Stuart", "Little", "username2", "password", "8671111", "stuartlittle@gmail.com", "Cheese Chef"));
		Volunteer volunteer3 = volunteerRepo.save(new Volunteer("Ivan", "Ford", "username3", "password","8672222", "ivanford@gmail.com", "Veterinarian"));
		Volunteer volunteer4 = volunteerRepo.save(new Volunteer("Lila", "Jones", "username4", "password","8673333", "lilajones@gmail.com", "Software Developer"));
		Volunteer volunteer5 = volunteerRepo.save(new Volunteer("Peggy", "Peggerson", "username5", "password","8674444", "pegpeg@gmail.com", "Accountant"));
		
		
		
		
		Project project1 = projectRepo.save(new Project("Dog Park", "We're building a dog park at the community center!", "3 months", organization3, volunteer1));
		Project project2 = projectRepo.save(new Project("Free Software Class for Kids", "We're having a free software summer class series at the library!", "3 months", organization5, volunteer2));
		Project project3 = projectRepo.save(new Project("Trash Cleanup", "We're picking up trash along the creek in our park.", "1 week", organization1, volunteer3));
		
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
