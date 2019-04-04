export default function ProjectForm(projects) {
    return `
        <div class="projectForm__container>
            <h2>Propose a project idea here!</h2>
                <h3>Project name: <input type="text" class="add__projectName" placeholder="Project Name"></h3>
                <h3>Description of project goal and plans: <input type="text" class="add__projectDescription" placeholder="Project Description">
                <h3>Estimated duration of project: <input type="text" class="add__estimatedDuration" placeholder="Estimated Duration"></h3>
                <div class="skills__container">
                    <h3>Skills involved in project: </h3>
                    <ul class="skills">
                        ${skills.map(skill => {
                            return `
                                <li class="skill">     
                                    <input type="checkbox" class="add__skills skill__skillName" id="${skill.id}" value="${skill.skillName}">
                                </li>
                                    `  
                        }).join('')}             
                    </ul>
                </div>  
                
                <button class="js-add-project button" id="${organization.id}>Submit proposal</button>
        </div>
            `
                // date thing?
                // volunteer
}
