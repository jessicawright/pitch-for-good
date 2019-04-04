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
            </div>
            
            <ul id="skills">
            ${skills.map(skill => {
                return `
            <li class="skill">     
            <input type="checkbox" class="skill__skillName" id="${skill.id}" name="skillIds" value="${skill.skillId}">${skill.skillName}
            </li>
            `;
        }).join('')}
        </ul>
        
        <ul id="skills">
            ${causes.map(cause => {
                return `
                <li class="cause">     
                <input type="checkbox" class="cause__causeName" id="${cause.causeId}" name="causeIds" value="${cause.causeId}">${cause.causeName}
                </li>
                `;
            }).join('')}
            </ul>
            
            <button class="js-add-volunteer button">Sign Up!</button>
        `;
   
}