export default function VolSkillForm(skills) {
    return `

<div class="skills__container">
                <ul class="skills">
                ${skills.map(skill => {
                    return `
                        <li class="skill">     
                            <input type="checkbox" class="skill__skillName" id="${skill.id}" value="${skill.skillName}">
                        </li>
                        `  
                }).join('')}             
                </ul>
                <button class="js-add-volunteer button">Create Profile</button>
            </div>  
            `;
            }