export default function Organizations(organizations, volunteer) {
    return `
        <h1>Organizations:</h1>
        <ul class="organizations">
            ${organizations.map(organization => {
                return `
                    <li class="organization">     
                        <h2 class="js-organization__orgName" id="${organization.organizationId}">${organization.orgName}</h2>
                        <h3 class="organization__orgMission">${organization.orgMission}</h3>
                        <h3 class="organization__contactPerson">${organization.contactPerson}</h3>
                        <h3 class="organization__orgEmail">${organization.orgEmail}</h3>
                        <h3 class="organization__websiteUrl">${organization.websiteUrl}</h3>
                        <h3> If you would like to propose a project to this organization, click the button below.</h3>
                        <div id="${volunteer.volunteerId}">
                           <button class="js-get-project-form button" id="${organization.organizationId}">Propose project</button>
                        </div>
                    </li>
                        `  
                        console.log(organization.organizationId)
                }).join('')}             
        </ul>
            `
}