package org.wecancodeit.pitchforgood.repotests;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

import java.util.Optional;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.wecancodeit.pitchforgood.models.Cause;
import org.wecancodeit.pitchforgood.repositories.CauseRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class CauseRepoTest {

	@Resource
	private TestEntityManager entityManager;
	@Resource
	private CauseRepository causeRepo;
	
	@Test
	public void shouldFindByCauseName() {
		Cause cause = causeRepo.save(new Cause("child welfare", ""));
		Long causeId = cause.getCauseId();
		
		entityManager.persist(cause);
		entityManager.flush();
		entityManager.clear();
		
		Optional<Cause> causeToFind = causeRepo.findById(causeId);
		Cause causeFromDatabase = causeRepo.findByCauseName("child welfare");
		assertThat(causeFromDatabase.getCauseName(), is("child welfare"));
	}
	
}
