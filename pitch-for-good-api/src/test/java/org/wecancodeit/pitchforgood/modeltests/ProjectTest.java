package org.wecancodeit.pitchforgood.modeltests;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThat;
import static org.hamcrest.Matchers.is;
import org.junit.Test;
import org.wecancodeit.pitchforgood.models.Organization;
import org.wecancodeit.pitchforgood.models.Project;
import org.wecancodeit.pitchforgood.models.Skill;
import org.wecancodeit.pitchforgood.models.Volunteer;

public class ProjectTest {
	
	Organization organization = new Organization("Habitat for Humanity","","","","");
	Project underTest = new Project("kids","","", organization);
	Skill skill = new Skill("");
	Volunteer volunteer = new Volunteer("","","","","");

	
	@Test
	public void shouldAddVolunteer() {
		underTest.addVolunteerToProject(volunteer);
		Volunteer volunteerFromDatabase = underTest.getVolunteer();
		assertThat(volunteerFromDatabase, is(volunteer));
		
	}
	@Test
	public void shouldAddOrganization() {
		underTest.addOrganizationToProject(organization);
		Organization organizationFromDatabase = underTest.getOrganization();
		assertThat(organizationFromDatabase, is(organization));
	}
	@Test
	public void shouldAddSkill() {
		underTest.addSkillToProject(skill);
		int length = underTest.getSkills().size();
		assertEquals(length, 1);
	}
	@Test 
	public void shouldRemoveSkill() {
		underTest.addSkillToProject(skill);
		underTest.removeSkill(skill);
		int length = underTest.getSkills().size();
		assertEquals(length, 0);
	}

}
