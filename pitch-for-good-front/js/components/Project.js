import Organization from './Organization'

export default function Project(projects) {
    return `
    ${projects.map(project => {
        return `

        <h3 class="project__projectName" id="${project.projectId}">Project Name: ${project.projectName}</h3>
        <h3>Project Description: ${project.projectDescription}</h3>
        <h3>Estimated Duration: ${project.estimatedDuration}</h3>
        <h3>Date of Submission: ${project.createDate}</h3>
        <h3>Current Status: ${project.status}</h3>
        <h3>Organization: ${Organization(project.organization)}</h3>
        `;
    }).join('')}     
    `;
    }

