package org.wecancodeit.pitchforgood.repotests;
import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.wecancodeit.pitchforgood.models.Organization;
import org.wecancodeit.pitchforgood.repositories.OrganizationRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class OrganizationRepoTest {
	
	@Resource
	private TestEntityManager entityManager;
	
	@Resource 
	private OrganizationRepository orgRepo;
	
	@Test 
	public void shouldFindOrganizationByName() {
		Organization organization = orgRepo.save(new Organization("Habitat for Humanity", "","","",""));
		
		entityManager.persist(organization);
		entityManager.flush();
		entityManager.clear();
		
		Organization organizationFromDatabase = orgRepo.findByOrgName("Habitat for Humanity");
		assertThat(organizationFromDatabase.getOrgName(), is("Habitat for Humanity"));
	}
}
