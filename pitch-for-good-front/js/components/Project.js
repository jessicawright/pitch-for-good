export default function Project(project) {
    return `
        <h2 class="project__projectName" id="${project.projectId}">${project.projectName}</h2>
    `
}