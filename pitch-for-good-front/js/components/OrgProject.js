export default function OrgProject(projects) {
    return `
    ${projects.map(project => {
        return `
 
        <h2 class="project__projectName" id="${project.projectId}">Project name: ${project.projectName}</h2>
        <h3 class="project__projectDescription">Project description: ${project.projectDescription}</h3>
        <h3 class="project__estimatedDuration">Estimated project duration: ${project.estimatedDuration}</h3>
        <h3 class="project__createDate">Date project was created: ${project.createDate}</h3>
        <h3 class="project__status">Current project status: ${project.status}</h3>
        <h3>Accept this project by clicking the button below. The volunteer who pitched the project will receive an email that their pitch has been accepted, and will reach out to you.</h3>
        <button class="js-accept-project button" id="${project.projectId}">Accept Project</button>
        `
    }).join('')}
    `
    }