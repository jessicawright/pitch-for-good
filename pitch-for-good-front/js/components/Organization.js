export default function Organization(organization) {
    return `
        <h2 class="organization__name">${organization.orgName}</h2>
        <h3 class="organization__orgMission">${organization.orgMission}</h3>
        <h3 class="organization__contactPerson">${organization.contactPerson}</h3>
        <h3 class="organization__orgEmail">${organization.orgEmail}</h3>
        <h3 class="organization__websiteUrl">${organization.websiteUrl}</h3>

        <h3> If you would like to propose a project to this organization, click the button below.</h3>
        <button class="js-get-project-form button" id="${organization.organizationId}">Propose project</button>
            `
}