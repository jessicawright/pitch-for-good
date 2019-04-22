import Cause from './Cause'
import OrgProject from  './OrgProject'

export default function OrganizationDashboard(organization) {
    return `
    <div class="org-dashboard-background">
        <div class="org-dashboard-container">
            <div class="org-container1 org-container-border">
                <header class="org-container1-header">
                    <span style="color: var(--secondary-gray);">
                        <i class="fas fa-user fa-2x"></i>
                    </span>
                    <h6 id="header-font">About ${organization.orgName}</h6>
                </header>
                <div class="container-body-left">
                    <ul>
                        <li>Organization: ${organization.orgName}</li>
                        <li>Mission: ${organization.orgMission}</li>
                        <li>Contact Person: ${organization.contactPerson}</li>
                        <li>Contact Email: ${organization.orgEmail}</li>
                        <li>Website: ${organization.websiteUrl}</li>
                    </ul>
                    <button type="button" class="js-log-out logout">Log Out</button>
                </div>
            </div>

            <div class="org-container2 org-container-border">
                <header class="org-container2-header">
                    <span style="color: var(--secondary-gray);">
                        <i class="fas fa-hand-holding-heart fa-2x"></i>
                    </span>
                    <h6 id="header-font">Your Causes</h6>
                </header>
                <ul>
                    <li>${Cause(organization.causes)}</li>
                </ul>
            </div>

            <div class="org-container3 org-container-border">
                <header class="org-container3-header">
                    <span style="color: var(--secondary-gray);">
                        <i class="fas fa-search fa-2x"></i>
                    </span>
                    <h6 id="header-font">Volunteer Search</h6>
                </header>
                <h6 class="pitch-instructions">Are you looking for a volunteer with specialized skills to help you make the most of your new project? Find your next super-volunteer here!</h6>
                <button class="js-get-volunteer-search" id="${organization.organizationId}">Volunteer Search</button>
            </div>

            <div class="org-container4 org-container-border">
                <header class="org-container4-header">
                    <span style="color: var(--secondary-gray);">
                        <i class="fas fa-bullhorn fa-2x"></i>
                    </span>
                    <h6 id="header-font">Pitched Projects</h6>
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