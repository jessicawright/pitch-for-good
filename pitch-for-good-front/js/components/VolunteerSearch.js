
export default function VolunterSearch(organization, skills, volunteers) {
    return `
   
        <h3>Search for volunteers by a skill here:</h3>
            
        ${skills.map(skill => {
            return `
                <select>
                    <option class="js-dropdown-skill" id="${skill.skillId}" value="${skill.skillId}">${skill.skillName}</option>
        </select>
                        `
    }).join('')}              
                        <button class="js-find-volunteers-by-skill button">Find Volunteers</button>
            `
}