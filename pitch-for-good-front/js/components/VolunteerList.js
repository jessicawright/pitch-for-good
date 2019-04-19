import Volunteers from './Volunteers'

export default function VolunteerList(organization, skill, volunteers) {
    console.log(organization.organizationId)
    console.log(skill.skillId)
    return `
    <div class="vol-search">
        <button class="js-search-again" id="${organization.organizationId}">Search Again</button>
        <button class="js-back-to-org-dashboard" id="${organization.organizationId}">Back to Dashboard</button>
        ${volunteers.map(volunteer => {
            return `
            <div class="volunteer-results">
                <h2 class="volunteer" id="${volunteer.volunteerId}">${volunteer.firstName} ${volunteer.lastName}</h2>
                <h3 class ="volunteer__email">${volunteer.email}</h3>
            </div>
            `
        }).join('')}
        <ul class="volunteers">
    </div>
        `
}
                        
                           