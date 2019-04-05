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
import org.wecancodeit.pitchforgood.models.Volunteer;
import org.wecancodeit.pitchforgood.repositories.VolunteerRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class VolunteerRepoTest {
	
	@Resource
	private TestEntityManager entityManager;
	@Resource
	private VolunteerRepository volunteerRepo;
	
	@Test
	public void shouldFindByLastName() {
		Volunteer volunteer = volunteerRepo.save(new Volunteer("Bob", "Nelson", "","","","",""));
		Long volunteerId = volunteer.getVolunteerId();
		entityManager.persist(volunteer);
		entityManager.flush();
		entityManager.clear();
		
		Optional<Volunteer> volunteerToFind = volunteerRepo.findById(volunteerId);
		Volunteer volunteerFromDatabase = volunteerRepo.findByLastName("Nelson");
		assertThat(volunteerFromDatabase.getLastName(), is("Nelson"));
	}

}
