package org.wecancodeit.pitchforgood.modeltests;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.wecancodeit.pitchforgood.models.Cause;
import org.wecancodeit.pitchforgood.models.Organization;
import org.wecancodeit.pitchforgood.models.Project;

public class OrganizationTest {
	
	Organization testOrg = new Organization("Habitat for Humanity","","", "","","", null, null);
	Project project = new Project("", "", "", testOrg);
	Cause cause = new Cause("","");
	
	
	@Test
	public void shouldAddProject() {
		testOrg.addProjectToOrganization(project);
		int length = testOrg.getProjects().size();
		assertEquals(length, 1);
	}
	
	@Test 
	public void shouldAddCause() {
		testOrg.addCauseToOrganization(cause);
		int length = testOrg.getCauses().size();
		assertEquals(length, 1);
				
	}
	@Test
	public void shouldRemoveProject() {
		testOrg.addProjectToOrganization(project);
		testOrg.removeProject(project);
		int length = testOrg.getProjects().size();
		assertEquals(length, 0);
	}
	@Test
	public void shouldRemoveCause() {
		testOrg.addCauseToOrganization(cause);
		testOrg.removeCause(cause);
		int length = testOrg.getCauses().size();
		assertEquals(length, 0);
	}
	

}
