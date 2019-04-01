package org.wecancodeit.pitchforgood.repositories;

import org.json.JSONObject;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.pitchforgood.models.Skill;

@Repository
public interface SkillRepository extends CrudRepository<Skill, Long>{

	Skill findBySkillName(String string);

	

}
