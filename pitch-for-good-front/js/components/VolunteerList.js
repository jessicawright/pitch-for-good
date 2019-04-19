import Volunteers from './Volunteers'

export default function VolunteerList(organization, skill, volunteers) {
    console.log(organization.organizationId)
    console.log(skill.skillId)
    return `
    <div class="vol-search">
        <span style="color: white;">
            <i class="fas fa-arrow-left fa-3x" id=${organization.organizationId}></i>
        </span>
        <div class="vol-search-buttons">
            <button class="js-search-again" id="${organization.organizationId}">Search Again</button>
        </div>
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
                        
                           