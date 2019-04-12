export default function VolHeader(volunteer) {
return `

<div class="nav">
    <ul>
        <li class="logo js-landing">Logo Image HERE</li>
        <li class="title js-landing">Pitch For Good</li>
        <li class="welcome">Welcome, ${volunteer.firstName}!</li>
        <li><button type="button" class="js-log-out logout">Log Out</button></li>
        <li><button type="button" class="js-delete-account delete" id="${volunteer.volunteerId}">Delete Account</button></li>
    </ul>
</div>
`;
}
    
