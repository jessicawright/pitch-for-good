export default function VolForm(causes, skills) {
    return `
    <h1>Volunteer Sign Up Page</h1>
        <div class="volForm__container">
            <div class="contact-info__container">
                <input type="text" class="add__firstName" placeholder="First Name:">
                <input type="text" class="add__lastName" placeholder="Last Name:"><br>
                <input type="text" class="add__volUserName" placeholder="Username:">
                <input type="text" class="add__volPassword" placeholder="Password:"><br>
                <input type="text" class="add__jobTitle" placeholder="Job Title:"><br>

                <input type="text" class="add__phoneNum" placeholder="Phone:">
                <input type="text" class="add__email" placeholder="Email:">
            </div>
            <div class="skills__container">   
                <ul id="skills">
                    ${skills.map(skill => {
                        return `
                            <li class="skill">     
                                <input type="checkbox" class="skill__skillName" id="${skill.id}" name="skillIds" value="${skill.skillId}">${skill.skillName}
                            </li>
                        `;
                    }).join('')}
                </ul>
            </div>

            
            <ul id="skills">
            ${skills.map(skill => {
                return `
            <li class="skill">     
            <input type="checkbox" class="skill__skillName" id="${skill.skillId}" name="skillIds" value="${skill.skillId}">${skill.skillName}
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