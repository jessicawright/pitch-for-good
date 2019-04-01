package org.wecancodeit.pitchforgood;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;
import org.wecancodeit.pitchforgood.models.Cause;
import org.wecancodeit.pitchforgood.models.Skill;
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
		
		Cause cause1 = new Cause("Animal Welfare and Services", "");
		Cause cause2 = new Cause("Arts, Culture, Humanities", "");
		Cause cause3 = new Cause("Community Development", "");
		Cause cause4 = new Cause("Education", "");
		Cause cause5 = new Cause("Environment", "");
		Cause cause6 = new Cause("Health", "");
		Cause cause7 = new Cause("Human and Civil Rights", "");
		Cause cause8 = new Cause("Children's and Family Services", "");
		Cause cause9 = new Cause("Youth Development, Shelter, and Crisis Services", "");
		Cause cause10 = new Cause("Hunger", "");
		Cause cause11 = new Cause("Homeless Services", "");
		Cause cause12 = new Cause("International Services", "");
		Cause cause13 = new Cause("Public Policy", "");
		Cause cause14 = new Cause("Religion");
		
		Skill skill1 = new Skill("Childcare");
		Skill skill2 = new Skill("Animal Care");
		Skill skill3 = new Skill("Legal Knowledge");
		Skill skill4 = new Skill("Carpentry");
		Skill skill5 = new Skill("Education");
		Skill skill6 = new Skill("Technology");
		Skill skill7 = new Skill("Culinary Arts");
		Skill skill8 = new Skill("Visual Arts");
		Skill skill9 = new Skill("Music");
		Skill skill10 = new Skill("Healthcare");
		Skill skill11 = new Skill("ESL");
		Skill skill12 = new Skill("Bilingual");
		Skill skill13 = new Skill("Horticulture");
		Skill skill14 = new Skill("Logistics");
		Skill skill15 = new Skill("Engineering");
		Skill skill16 = new Skill("Routing");
		Skill skill17 = new Skill("Graphic Design");
		Skill skill18 = new Skill("MBA");
		Skill skill19 = new Skill("CPA");
		Skill skill20 = new Skill("Finance");
		Skill skill21 = new Skill("Healthcare");
		Skill skill22 = new Skill("Fundraising");
		Skill skill23 = new Skill("Career Coaching");
		Skill skill24 = new Skill("Counseling");
		Skill skill25 = new Skill("Addiction Services");
		Skill skill26 = new Skill("Real Estate");
		Skill skill27 = new Skill("Fitness");
		
	}

}
