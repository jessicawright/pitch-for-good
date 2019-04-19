export default function Organizations(volunteer, organizations) {
    return `
        <h1>Organizations:</h1>
        <ul class="organizations">
            ${organizations.map(organization => {
                return `
                    <li class="organization">     
                        <img src="/images/${organization.orgLogo}">
                        <h2 class="js-organization__orgName" id="${organization.organizationId}">${organization.orgName}</h2>
                        <h3 class="organization__orgMission">${organization.orgMission}</h3>
                        <h3 class="organization__websiteUrl">${organization.websiteUrl}</h3>
                        <h3> If you would like to propose a project to this organization, click the button below.</h3>
                        
                        <input type="hidden" id="${volunteer.volunteerId}" class="volunteerId">
                        <button class="js-get-project-form button" id="${organization.organizationId}">Make Your Pitch!</button>
                    </li>
                    `  
                }).join('')}             
                </ul>
                `
}