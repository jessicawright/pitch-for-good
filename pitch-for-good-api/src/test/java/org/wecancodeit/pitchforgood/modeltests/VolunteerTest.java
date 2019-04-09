package org.wecancodeit.pitchforgood.modeltests;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.wecancodeit.pitchforgood.models.Cause;
import org.wecancodeit.pitchforgood.models.Organization;
import org.wecancodeit.pitchforgood.models.Project;
import org.wecancodeit.pitchforgood.models.Skill;
import org.wecancodeit.pitchforgood.models.Volunteer;

public class VolunteerTest {

	Volunteer underTest = new Volunteer("","","","","","","");
	Skill skill = new Skill("");
	Cause cause = new Cause("","");
	Organization organization = new Organization("","","","","");
	Project project = new Project("","","", organization);
	
	@Test
	public void shouldAddSkill() {
		underTest.addSkillToVolunteer(skill);
		int length = underTest.getSkills().size();
		assertEquals(length, 1);
	}
	@Test 
	public void shouldRemoveSkill() {
		underTest.addSkillToVolunteer(skill);
		underTest.removeSkill(skill);
		int length = underTest.getSkills().size();
		assertEquals(length, 0);
	}
	@Test
	public void shouldAddCause() {
		underTest.addCauseToVolunteer(cause);
		int length = underTest.getCauses().size();
		assertEquals(length, 1);
	}
	@Test
	public void shouldRemoveCause() {
		underTest.addCauseToVolunteer(cause);
		underTest.removeCause(cause);
		int length = underTest.getCauses().size();
		assertEquals(length, 0);
	}
	@Test
	public void shouldAddProject() {
		underTest.addProjectToVolunteer(project);
		int length = underTest.getProjects().size();
		assertEquals(length, 1);
	}
	@Test
	public void shouldRemoveProject() {
		underTest.addProjectToVolunteer(project);
		underTest.removeProject(project);
		int length = underTest.getProjects().size();
		assertEquals(length, 0);
	}
	
}
