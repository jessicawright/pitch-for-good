export default function Project(projects) {
    return `
    ${projects.map(project => {
        return `

        <h2 class="project__projectName" id="${project.projectId}">Project name: ${project.projectName}</h2>
        <h3 class="project__projectDescription">Project description: ${project.projectDescription}</h3>
        <h3 class="project__estimatedDuration">Estimated project duration: ${project.estimatedDuration}</h3>
        <h3 class="project__createDate">Date project was created: ${project.createDate}</h3>
        <h3 class="project__status">Current project status: ${project.status}</h3>
        
        `;
    }).join('')}     
    `;
    }

