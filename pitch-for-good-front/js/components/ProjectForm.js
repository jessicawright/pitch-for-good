export default function ProjectForm(projects) {
    return `
    <h1>Project Creation Page</h1>    
        <div class="projectForm__container">
            <div class="project-info__container">
                <input type="text" class="add__projectName" placeholder="Project Name:">
                <input type="text" class="add__projectDescription" placeholder="Project Description:">
                <input type="text" class="add__estimatedDuration" placeholder="Estimated Duration:">
            </div>    
            <div class="skills__container">
                <ul id="skills">
                    ${skills.map(skill => {
                        return `
                            <li class="skill">     
                                <input type="checkbox" class="skill__skillName" id="${skill.id}" value="${skill.skillName}">
                            </li>
                        `  
                    }).join('')}             
                </ul>
            </div>  
            <button class="js-add-project button" id="${organization.id}>Submit proposal</button>
        </div>
    `;
                // date thing?
                // volunteer
}
