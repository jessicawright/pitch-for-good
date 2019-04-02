export default function VolForm(volunteer) {
    return `
        <div class="grid-container>
            <div class="contact-info>
                <input type="text" class="add__firstName" placeholder="First Name:">
                <input type="text" class="add__lastName" placeholder="Last Name:">
                <input type="text" class="add__jobTitle" placeholder="Job Title:">
                <input type="text" class="add__phoneNum" placeholder="Phone:">
                <input type="text" class="add__email" placeholder="Email:">
            </div>

            <div class="causes-container">
                <ul class="causes">
                    ${causes.map(cause => {
                        return `
                            <li class="cause">      //check cause.causeName may need to change volunteerID
                                <input type="checkbox" class="cause__causeName" id="${cause.id}" value="${cause.causeName}">
                            </li>
                            `  
                    }).join('')}             
                </ul>
            </div>
    
            <div class="skills__container">
                <ul class="skills">
                ${skills.map(skill => {
                    return `
                        <li class="skill">      //check cause.causeName may need to change volunteerID
                            <input type="checkbox" class="skill__skillName" id="${skill.id}" value="${skill.skillName}">
                        </li>
                        `  
                }).join('')}             
                </ul>
            </div>  
            <button class="js-add-volunteer button">Create Profile</button>
        </div>
    `;
    // <h1>Hello World.</h1>
    // <h2>This is the form where a volunteer signs up.</h2>
}