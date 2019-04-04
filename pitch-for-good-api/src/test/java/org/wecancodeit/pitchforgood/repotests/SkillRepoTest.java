package org.wecancodeit.pitchforgood.repotests;

import javax.annotation.Resource;
import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.wecancodeit.pitchforgood.models.Skill;
import org.wecancodeit.pitchforgood.repositories.SkillRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class SkillRepoTest {
	
	@Resource
	private TestEntityManager entityManager;
	@Resource
	private SkillRepository skillRepo;
	
	@Test
	public void shouldFindSkillByName() {
		Skill skill = skillRepo.save(new Skill("programming"));
		
		entityManager.persist(skill);
		entityManager.flush();
		entityManager.clear();
		
		Skill skillFromDatabase = skillRepo.findBySkillName("programming");
		assertThat(skillFromDatabase.getSkillName(), is("programming"));
	}
}
