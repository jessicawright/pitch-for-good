
export default function VolunterSearch(organization, skills) {
    return `
        <h3>Search for volunteers by a skill here:</h3>
        <select class="">
        ${skills.map(skill => {
            return `
                <option class="js-dropdown-skill" id="${skill.skillId}" value="${skill.skillId}">${skill.skillName}</option> 
            `
        }).join('')}
        </select>      
                
        <button class="js-find-volunteers-by-skill button" id="${organization.organizationId}">Find Volunteers</button>
    `
}