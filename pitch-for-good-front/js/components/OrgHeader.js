export default function OrgHeader(organization) {
    return `
    
    <div class="nav">
        <ul>
            <li class="logo js-landing">Logo Image HERE</li>
            <li class="title js-landing">Pitch For Good</li>
            <li class="welcome">Welcome, ${organization.orgName}!</li>
            <li><button type="button" class="js-log-out logout">Log Out</button></li>
        </ul>
    </div>
    `;
    }