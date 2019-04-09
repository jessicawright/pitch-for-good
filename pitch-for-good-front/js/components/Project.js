export default function Project(projects) {
    return `
    ${projects.map(project => {
        return `

        <h2 class="project__projectName" id="${project.projectId}">${project.projectName}</h2>
        `;
    }).join('')}     
    `;
    }

