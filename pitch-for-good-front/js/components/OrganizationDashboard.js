import Cause from './Cause'
import OrgProject from  './OrgProject'

export default function OrganizationDashboard(organization) {
    return `
    <div class="org-dashboard-background">
        <div class="org-dashboard-container">
            <div class="org-container1 org-container-border">
                <header class="org-container-header">
                    <h6></h6>
                    <span style="color: var(--secondary-gray);">
                        <i class="fas fa-user fa-2x"></i>
                    </span>
                    <h6>About ${organization.orgName}</h6>
                    <img src="/images/horizontalline.png">
                </header>
                <div class="container-body-left">
                    <ul>
                        <li>Organization: ${organization.orgName}</li>
                        <li>Mission: ${organization.orgMission}</li>
                        <li>Contact Person: ${organization.contactPerson}</li>
                        <li>Contact Email: ${organization.orgEmail}</li>
                        <li>Website: ${organization.websiteUrl}</li>
                    </ul>
                </div>
            </div>

            <div class="org-container2 org-container-border">
                <header class="org-container-header">
                    <h6></h6>
                    <span style="color: var(--secondary-gray);">
                        <i class="fas fa-hand-holding-heart fa-2x"></i>
                    </span>
                    <h6>Your Causes</h6>
                    <img src="/images/horizontalline.png">
                </header>
                <ul>
                    <li>${Cause(organization.causes)}</li>
                </ul>
            </div>

            <div class="org-container3 org-container-border">
                <header class="org-container-header">
                    <h6></h6>
                    <span style="color: var(--secondary-gray);">
                        <i class="fas fa-search fa-2x"></i>
                    </span>
                    <h6>Volunteer Search</h6>
                    <img src="/images/horizontalline.png">
                </header>
                <h6 class="pitch-instructions">Are you looking for a volunteer with specialized skills to help you make the most of your new project? Find your next super-volunteer here!</h6>
                <button class="js-get-volunteer-search" id="${organization.organizationId}">Volunteer Search</button>
            </div>

            <div class="org-container4 org-container-border">
                <header class="org-container-header">
                    <h6></h6>
                    <span style="color: var(--secondary-gray);">
                        <i class="fas fa-bullhorn fa-2x"></i>
                    </span>
                    <h6>Pitched Projects</h6>
                    <img src="/images/horizontalline.png">
                </header>
                <h6 class="pitch-instructions">Pitch for Good volunteers have offered to lead the following projects for your organization. To begin a conversation with a volunteer about a specific project, click accept. The volunteer will recieve notification that you are interested and will initialize contact with ${organization.contactPerson} at ${organization.orgEmail}.</h6>
                <ul>
                    <li>${OrgProject(organization.projects)}</li>
                </ul>
            </div>      

        </div>
    </div>
        `;
}