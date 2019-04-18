export default function VolHeader(volunteer) {
return `

<div class="nav">
    <ul class="nav-links">
        <li><img src="/images/lotus.png" class="logo js-landing"></li>
        <li class="title js-landing">Pitch For Good</li>
    <div class="nav-name">
        <li class="welcome">${volunteer.firstName} ${volunteer.lastName}</li>  
        <li><button type="button" class="js-log-out logout">Log Out</button></li>
    </div>
    </ul>
</div>
`;
}
    
