export default function addSkills(volunteer, skills) {
  return `



  <section class="addSkills__background">
    <div class="addSkills-arrow">
      <span style="color: white;">
        <i class="skills-arrow fas fa-arrow-left fa-3x" id=${volunteer.volunteerId}></i>
      </span>
    </div>
    <div class="container">
      <h2 class="addSkills_profile">Add additional skills to your profile:</h2>
      <div class="skills__container">
        <ul class="skills__container__list" id="skills">
            ${skills.map(skill => {
                return `
                    <li class="skill">
                        <label><input type="checkbox" class="skill__skillName" id="${skill.skillId}" name="skillIds" value="${skill.skillId}">${skill.skillName}</label>
                    </li>
                `;
            }).join('')}
        </ul>
      </div>
    </div>
      <div class="skill-buttons">

          <div class="addSkill__button"><button id=${volunteer.volunteerId} class="js-addSkills">Submit</button></div>
      </div>
  </section>
  `;
}
// <div class="vol-search">
//     <h3 class="vol-search-info">Welcome to the volunteer search page. Use this tool to find volunteers with skills that you need to make the most of your next big project!</h3>
//     <h4 class="vol-search-info-detail">(Could this be your next super-volunteer?)</h4>
//     <select id="skillId" class="skill-select">
//     ${skills.map(skill => {
//         return `
//             <option class="js-dropdown-skill" id="${skill.skillId}" value="${skill.skillId}">${skill.skillName}</option>
//         `
//     }).join('')}
//     </select>
//     <button class="js-find-volunteers-by-skill button" id="${organization.organizationId}">Search</button>
// </div>
