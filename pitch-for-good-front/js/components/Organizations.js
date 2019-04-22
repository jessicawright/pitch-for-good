export default function Organizations(volunteer, organizations) {
    return `
        <div class="organizations__container">
        <h1 class="organization-page__title">Organizations:</h1>
        <ul class="organizations">
        ${organizations.map(organization => {
            return `
            <li class="organization">
                <div class="org__content">   
                    <section class="org__logo">  
                        <img src="/images/${organization.orgLogo}">
                    </section>
                    <section class="org__info">
                        <h2 class="js-organization__orgName white" id="${organization.organizationId}">${organization.orgName}</h2>
                        <h3 class="organization__orgMission white">${organization.orgMission}</h3>
                        <h3 class="organization__websiteUrl white"><a href="${organization.websiteUrl}">${organization.websiteUrl}</a></h3>
                    </section>
                </div>
                <section class="org__project-submit-area">
                    <h3 class="white"> If you would like to propose a project to this organization, click the button below.</h3>
                
                    <input type="hidden" id="${volunteer.volunteerId}" class="volunteerId">
                    <button class="js-get-project-form pitch-button" id="${organization.organizationId}">Make Your Pitch!</button>
                </section>
            </li>
                    `  
                }).join('')}             
        </ul>
        </div>
                `
}