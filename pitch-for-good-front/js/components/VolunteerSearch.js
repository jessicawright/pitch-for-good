
export default function VolunterSearch(organization, skills) {
    return `
        <div class="vol-search">
            <h3 class="vol-search-info">Welcome to the volunteer search page. Use this tool to find volunteers with skills that you need to make the most of your next big project!</h3>
            <h4 class="vol-search-info-detail">(Could this be your next super-volunteer?)</h4>
            <select id="skillId" class="skill-select">
            ${skills.map(skill => {
                return `
                    <option class="js-dropdown-skill" id="${skill.skillId}" value="${skill.skillId}">${skill.skillName}</option> 
                `
            }).join('')}
            </select>        
            <button class="js-find-volunteers-by-skill button" id="${organization.organizationId}">Search</button>
        </div>
    `
}