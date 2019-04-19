
export default function VolunterSearch(organization, skills) {
    return `
        <div class="vol-search">
            <span style="color: white;">
                <i class="fas fa-arrow-left fa-3x" id=${organization.organizationId}></i>
            </span>
            <div class="container">
                <h2 class="vol-search-info">Welcome to the volunteer<br>search page.</h2>
                <h4 class="vol-search-info-detail">Use this tool to find volunteers with skills that you need to make the most of your next big project!</h4>
                <select id="skillId" class="skill-select">
                ${skills.map(skill => {
                    return `
                        <option class="js-dropdown-skill" id="${skill.skillId}" value="${skill.skillId}">${skill.skillName}</option> 
                    `
                }).join('')}
                </select>        
                <button class="js-find-volunteers-by-skill button" id="${organization.organizationId}">Search</button>
            </div>
        </div>
    `
}