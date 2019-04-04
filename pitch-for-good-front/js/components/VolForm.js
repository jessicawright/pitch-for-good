export default function VolForm(causes, skills) {
    return `
        <div class="grid-container>
            <div class="contact-info>
                <input type="text" class="add__firstName" placeholder="First Name:">
                <input type="text" class="add__lastName" placeholder="Last Name:">
                <input type="text" class="add__jobTitle" placeholder="Job Title:">
                <input type="text" class="add__phoneNum" placeholder="Phone:">
                <input type="text" class="add__email" placeholder="Email:">
            </div>
            <button class="js-add-volunteer-bio button">Next</button>
        </div>

        <ul id="skills">
            ${skills.map(skill => {
        return `
            <li class="skill">     
                <input type="checkbox" class="skill__skillName" id="${skill.id}" value="${skill.skillName}">${skill.skillName}
            </li>
                `;
    }).join('')}
        </ul>

        <ul id="skills">
            ${causes.map(cause => {
        return `
            <li class="cause">     
                <input type="checkbox" class="cause__causeName" id="${cause.causeId}" value="${cause.causeName}">${cause.causeName}
            </li>
                `;
    }).join('')}
        </ul>
        
        `;
   
}