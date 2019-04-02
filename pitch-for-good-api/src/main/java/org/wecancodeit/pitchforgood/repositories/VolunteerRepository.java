package org.wecancodeit.pitchforgood.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.pitchforgood.models.Volunteer;

@Repository
public interface VolunteerRepository extends CrudRepository<Volunteer, Long>{

}
