package org.wecancodeit.pitchforgood.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.pitchforgood.models.Organization;

@Repository
public interface OrganizationRepository extends CrudRepository<Organization, Long>{

	Organization findByOrganizationName(String string);

}
