package org.wecancodeit.pitchforgood.repositories;

import java.util.Collection;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.pitchforgood.models.Organization;
import org.wecancodeit.pitchforgood.models.Project;
import org.wecancodeit.pitchforgood.models.Volunteer;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long>{

	Project findByProjectName(String string);

	Collection<Project> findAllByOrganization(Organization organizationToDelete);

	Collection<Project> findProjectsByVolunteer(Volunteer volunteerToDelete);

}
