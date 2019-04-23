export default function OrgForm(causes) {
    return `
    <div class="orgForm__background">
        <h1 id="orgForm-header">Organization Sign Up</h1>
            <section class="orgForm-info__container">
                <span style="color: var(--primary-color);">
                    <i class="fas fa-user fa-2x"></i>
                </span>
                <h6 id="orgForm__userRequest">About Your Organization</h6>
                <input type="text" class="add__orgName" placeholder="Organization Name:">
                <input type="text" class="add__orgUrl" placeholder="Website:"><br>
                <input type="text" class="add__orgLogo" placeholder="Logo:"><br>
                <input type="text" class="add__contactPerson" placeholder="Organization contact:">
                <input type="text" class="add__contactEmail" placeholder="Contact Email:"><br>
                <input type="text" class="add__orgUserName" placeholder="Username:"><br>
                <input type="text" class="add__orgPassword" placeholder="Password:"><br>
                <textarea type="text" class="add__mission" placeholder="Your mission:"></textarea><br>
            </section>
                        
            <section class="causes__container-form">
                <div class="causes__container-flex">
                    <span style="color: var(--primary-color);">
                        <i class="fas fa-hand-holding-heart fa-2x"></i>
                    </span>
                    <h6 id="orgForm__causeRequest">What are the causes your organization supports?</h6>
                    <ul id="causes">
                        ${causes.map(cause => {
                            return `
                                <li class="orgForm-cause">     
                                    <label><input type="checkbox" class="cause__causeName" id="${cause.causeId}" name="causeIds" value="${cause.causeId}"><span class="cause-bold">${cause.causeName}</span>:  ${cause.causeDescription}</label>
                                </li>
                            `; 
                        }).join('')}  
                    </ul>            
                </div>
            </section>   
        <button class="js-add-organization button">Let's Go!</button>
    </div>
    `;
}