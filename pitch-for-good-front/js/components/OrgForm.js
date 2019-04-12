export default function OrgForm(causes) {
    return `
    <h1>Organization Sign Up Page</h1>
        <div class="orgForm__container">
            <div class="contact-info__container">
                <input type="text" class="add__orgName" placeholder="Organization Name:">
                <input type="text" class="add__mission" placeholder="Your mission:"><br>
                <input type="text" class="add__contactPerson" placeholder="Organization contact:">
                <input type="text" class="add__contactEmail" placeholder="Contact Email:"><br>
                <input type="text" class="add__orgUrl" placeholder="Website:"><br>
                <input type="text" class="add__orgUserName" placeholder="Username:"><br>
                <input type="text" class="add__orgPassword" placeholder="Password:"><br>
            </div>
                       
            
            <ul id="causes">
                ${causes.map(cause => {
                    return `
                    <li class="cause">     
                        <input type="checkbox" class="cause__causeName" id="${cause.causeId}" name="causeIds" value="${cause.causeId}">${cause.causeName}
                    </li>
                `;
            }).join('')}
            </ul>
            
            <button class="js-add-organization button">Sign Up!</button>
        `;

   
}