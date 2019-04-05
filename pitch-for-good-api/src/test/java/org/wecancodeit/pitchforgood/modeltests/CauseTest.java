package org.wecancodeit.pitchforgood.modeltests;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.wecancodeit.pitchforgood.models.Cause;
import org.wecancodeit.pitchforgood.models.Organization;
import org.wecancodeit.pitchforgood.models.Volunteer;

public class CauseTest {
	
	Cause underTest = new Cause("TestCause", "");
	Organization organization = new Organization("","","","","");
	Volunteer volunteer = new Volunteer("","","","","","","");
	
	@Test
	public void shouldAddOrganization() {
		underTest.addOrganization(organization);
		int length = underTest.getOrganizations().size();
		assertEquals(length, 1);
	}
	@Test
	public void shouldRemoveOrganization() {
		underTest.addOrganization(organization);
		underTest.removeOrganization(organization);
		int length = underTest.getOrganizations().size();
		assertEquals(length, 0);
	}
	@Test
	public void shouldAddVolunteer() {
		underTest.addVolunteer(volunteer);
		int length = underTest.getVolunteers().size();
		assertEquals(length, 1);
	}
	@Test
	public void shouldRemoveVolunteer() {
		underTest.addVolunteer(volunteer);
		underTest.removeVolunteer(volunteer);
		int length = underTest.getVolunteers().size();
		assertEquals(length, 0);
	}
}