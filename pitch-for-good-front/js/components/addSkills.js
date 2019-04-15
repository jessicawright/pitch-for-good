export default function addSkills(volunteer, skills) {
    return`
    <h1>Add additional skills to your profile:</h1>

    <div class="skills__container">
                    <ul id="skills">
                        ${skills.map(skill => {
                            return `
                                <li class="skill">     
                                    <input type="checkbox" class="skill__skillName" id="${skill.skillId}" name="skillIds" value="${skill.skillId}">${skill.skillName}
                                </li>
                            `;
                        }).join('')}
                    </ul>
            </div>

    <button id=${volunteer.volunteerId} class="js-addSkills">Submit</button>
    <button id=${volunteer.volunteerId} class="js-back-to-dashboard">Cancel</button>
    `;
}