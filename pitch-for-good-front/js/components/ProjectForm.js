export default function ProjectForm(organization, skills, volunteer) {
    return `
        <h2>Propose a project idea here!</h2>
            <div class="projectForm__container">
                <h3 class="organization__orgName" id="${organization.organizationId}">Project proposal will be for ${organization.orgName}</h3>
                <h3>Project name:
                    <input type="text" class="add__projectName" placeholder="Project Name">
                </h3>
                <h3>Estimated duration of project: 
                    <input type="text" class="add__estimatedDuration" placeholder="Estimated Duration">
                </h3>
                <h3>Description of project goal and plans:
                    <input type="text" class="add__projectDescription" placeholder="Project Description">
                </h3>   
                <div class="skills__container">
                    <h3>Skills involved in project: </h3>
                    <ul class="skills">
                        ${skills.map(skill => {
                            return `
                                <li class="skill">     
                                    <input type="checkbox" class="js-skill__skillName" id="${skill.skillId}" value="${skill.skillId}">${skill.skillName}
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
