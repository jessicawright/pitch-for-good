package org.wecancodeit.pitchforgood.modeltests;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.wecancodeit.pitchforgood.models.Organization;
import org.wecancodeit.pitchforgood.models.Project;
import org.wecancodeit.pitchforgood.models.Skill;
import org.wecancodeit.pitchforgood.models.Volunteer;

public class SkillTest {

	Skill underTest = new Skill("skillName");
	Volunteer volunteer = new Volunteer("","","","","","","");
	Organization org = new Organization("","","","","", null, null);
	Project project = new Project("","","", org);
	
	@Test
	public void shouldAddVolunteer() {
		underTest.addVolunteerToSkill(volunteer);
		int length = underTest.getVolunteers().size();
		assertEquals(length, 1);
	}
	@Test 
	public void shouldRemoveVolunteer() {
		underTest.addVolunteerToSkill(volunteer);
		underTest.removeVolunteer(volunteer);
		int length = underTest.getVolunteers().size();
		assertEquals(length, 0);
				
	}
	@Test 
	public void shouldAddProject() {
		underTest.addProjectToSkill(project);
		int length = underTest.getProjects().size();
		assertEquals(length, 1);
	}
	@Test
	public void shouldRemoveProject() {
		underTest.addProjectToSkill(project);
		underTest.removeProject(project);
		int length = underTest.getProjects().size();
		assertEquals(length, 0);
	}
}
