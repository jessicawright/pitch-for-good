export default function Volunteers(volunteers) {
    return `
    
        <ul class="volunteers">
        ${volunteers.map(volunteer => {
            return `
                <h2 class="volunteer" id="${volunteer.volunteerId}">${volunteer.firstName} ${volunteer.lastName}</h2>
                <h3 class ="volunteer__email">${volunteer.email}</h3>
                `
            }).join('')}
        </ul>
   
        `
}