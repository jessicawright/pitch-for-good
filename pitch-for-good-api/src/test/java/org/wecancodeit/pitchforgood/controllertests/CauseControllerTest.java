package org.wecancodeit.pitchforgood.controllertests;



import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Arrays;
import java.util.List;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import org.wecancodeit.pitchforgood.controllers.CauseController;

import org.wecancodeit.pitchforgood.models.Cause;
import org.wecancodeit.pitchforgood.repositories.CauseRepository;
import org.wecancodeit.pitchforgood.repositories.OrganizationRepository;
import org.wecancodeit.pitchforgood.repositories.ProjectRepository;
import org.wecancodeit.pitchforgood.repositories.SkillRepository;
import org.wecancodeit.pitchforgood.repositories.VolunteerRepository;

@RunWith(SpringRunner.class)
@WebMvcTest(CauseController.class)
public class CauseControllerTest {
	
	@Autowired
	private WebApplicationContext context;
	@Autowired
	private MockMvc mvc;
	
	@MockBean
    private SkillRepository skillRepo;
    @MockBean
    private VolunteerRepository volunteerRepo;
    @MockBean
    private ProjectRepository projectRepo;
    @MockBean
    private CauseRepository causeRepo;
    @MockBean
    private OrganizationRepository orgRepo;

    @InjectMocks
    private CauseController causeController;
    
    public void setup() {
    	this.mvc = MockMvcBuilders.webAppContextSetup(context).build();
    }
    
    @Test
    public void givenCauses_whenGetCauses_theReturnJsonArray() throws Exception {
    	Cause cause = new Cause("causeName", "");
    	List<Cause> allCauses = Arrays.asList(cause);
    	given(causeRepo.findAll()).willReturn(allCauses);
    	mvc.perform(get("/causes/").contentType(MediaType.APPLICATION_JSON))
    	.andExpect(status().isOk())
    	.andExpect(jsonPath("$", hasSize(1)))
    	.andExpect(jsonPath("$[0].causeName", is(cause.getCauseName())));
    }
}
