package org.wecancodeit.pitchforgood.mvctests;

import static org.hamcrest.CoreMatchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;

import java.util.Optional;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.wecancodeit.pitchforgood.controllers.SkillController;
import org.wecancodeit.pitchforgood.models.Skill;
import org.wecancodeit.pitchforgood.repositories.CauseRepository;
import org.wecancodeit.pitchforgood.repositories.OrganizationRepository;
import org.wecancodeit.pitchforgood.repositories.ProjectRepository;
import org.wecancodeit.pitchforgood.repositories.SkillRepository;
import org.wecancodeit.pitchforgood.repositories.VolunteerRepository;


@RunWith(SpringRunner.class)
@WebMvcTest(SkillController.class)
public class SkillMvcTest {

	@Resource
	private MockMvc mvc;

	@MockBean
	private SkillRepository skillRepo;
	@MockBean
	private VolunteerRepository volunteerRepo;
	@MockBean 
	private OrganizationRepository organizationRepo;
	@MockBean
	private ProjectRepository projectRepo;
	@MockBean 
	private CauseRepository causeRepo;

	@Mock
	private Skill skill;

	@Test
	public void shouldRouteToSingleSkillView() throws Exception {
		Long skillId = 1L;
		when(skillRepo.findById(skillId)).thenReturn(Optional.of(skill));
		mvc.perform(get("/skills?id=1")).andExpect(view().name(is("skill")));
	}

}
