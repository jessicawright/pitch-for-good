export default function ProjectForm(organization, skills, volunteer) {
    return `
        <h2>Propose a project idea here!</h2>
            <div class="projectForm__container">
                <div class="project-info__container">
                    <h3 class="organization__orgName" id="${organization.organizationId} header-font">Project proposal will be for ${organization.orgName}</h3>
                    <h3 id="header-font">
                        <input type="text" class="add__projectName" placeholder="Project Name">
                    </h3>
                    <h3 id="header-font"> 
                        <input type="text" class="add__estimatedDuration" placeholder="Estimated Duration">
                    </h3>
                    <h3 id="header-font" class="h3__textArea"></h3>
                        <textarea id="textArea" class="add__projectDescription" placeholder="Project Description"></textarea>
                </div>
                <div class="skills__container-project">
                <span style="color: var(--primary-color);">
                <i class="fas fa-clipboard-list fa-2x"></i>
                </span>
                    <h3 id="header-font">Skills involved in project: </h3>
                    <ul id="skills">
                        ${skills.map(skill => {
                            return `
                                <li class="volForm-skill">     
                                    <label><input type="checkbox" class="skill__skillName" id="${skill.skillId}" value="${skill.skillId}">${skill.skillName}</label>
                                </li>
                                    `  
                        }).join('')}             
                    </ul>
                </div>  
                
                <div class="project__submit-parent-volunteer" id="${volunteer.volunteerId}">
                    <button class="js-add-project button" id="${organization.organizationId}">Submit proposal</button>
                </div>
            </div>
            `
                // date thing?
                // volunteer
}
