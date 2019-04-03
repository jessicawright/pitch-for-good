export default function VolForm(volunteers) {
    return `
        <div class="grid-container>
            <div class="contact-info>
                <input type="text" class="add__firstName" placeholder="First Name:">
                <input type="text" class="add__lastName" placeholder="Last Name:">
                <input type="text" class="add__jobTitle" placeholder="Job Title:">
                <input type="text" class="add__phoneNum" placeholder="Phone:">
                <input type="text" class="add__email" placeholder="Email:">
            </div>
            <button class="js-add-volunteer-bio button">Next</button>
        </div>
    `;
   
}