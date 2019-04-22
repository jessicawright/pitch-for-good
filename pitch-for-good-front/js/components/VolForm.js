export default function VolForm(causes, skills) {
    return `
    <div class="volForm__background">
        <h1 id="volForm-header">Volunteer Sign Up Page</h1>
            <section class="contact-info__container">
                <span style="color: var(--secondary-gray);">
                    <i class="fas fa-user fa-2x"></i>
                </span>
                <h6 id="volForm__userRequest">About You</h6>
                <input type="text" class="add__firstName" placeholder="First Name:">
                <input type="text" class="add__lastName" placeholder="Last Name:"><br>
                <input type="text" class="add__volUserName" placeholder="Username:">
                <input type="text" class="add__volPassword" placeholder="Password:"><br>
                <input type="text" class="add__jobTitle" placeholder="Job Title:"><br>
                <input type="text" class="add__phoneNum" placeholder="Phone:">
                <input type="text" class="add__email" placeholder="Email:">
            </section>
                
            <section class="skills__container-form">
                <div class="skills__container-flex">
                    <span style="color: var(--secondary-gray);">
                        <i class="fas fa-clipboard-list fa-2x"></i>
                    </span>
                    <h6 id="volForm__skillRequest">What skills you are able to contribute to a Pitch for Good project?</h6>
                    <ul id="skills">
                        ${skills.map(skill => {
                            return `
                                <li class="volForm-skill">     
                                    <label><input type="checkbox" class="skill__skillName" id="${skill.id}" name="skillIds" value="${skill.skillId}">${skill.skillName}</label>
                                </li>
                            `;
                        }).join('')}
                    </ul>
                </div>
            </section>
                
            <section class="causes__container-form">   
                <div class="causes__container-flex">
                    <span style="color: var(--secondary-gray);">
                        <i class="fas fa-hand-holding-heart fa-2x"></i>
                    </span>
                    <h6 id="volForm__causeRequest">What are the causes you support?</h6>
                    <ul id="causes">
                        ${causes.map(cause => {
                            return `
                                <li class="volForm-cause">     
                                    <label><input type="checkbox" class="cause__causeName" id="${cause.causeId}" name="causeIds" value="${cause.causeId}"><span class="cause-bold">${cause.causeName}</span>:   ${cause.causeDescription}</label>
                                </li>
                            `;
                        }).join('')}
                    </ul>
                </div>
            </section>
        <button class="js-add-volunteer button">Volunteer Sign Up!</button>
    </div>
    `;  
}