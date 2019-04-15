export default function OrgProjectDetail(organization) {
    return `
        <h2 class="organization__name">${organization.orgName}</h2>
        <h3 class="organization__orgMission">${organization.orgMission}</h3>
        <h3 class="organization__contactPerson">${organization.contactPerson}</h3>
        <h3 class="organization__orgEmail">${organization.orgEmail}</h3>
        <h3 class="organization__websiteUrl">${organization.websiteUrl}</h3>

        `
}