export default function OrgLanding() {
    return `
        <div class="orglanding__grid-container">
            <form class="orglanding__signin">
                <h1>Organization Sign In</h1>
                <input type="text" id="username" class="org-username" placeholder="Username:"><br>
                <input type="text" id="password" class="org-password" placeholder="Password:"><br>
                <button class="js-org-signin">Submit</button>
            </form>
            <div class="orglanding__signup">
                <h1>New User?</h1>
                <button class="js--sign-up__organization">Create Account</button>
            </div>
        </div>
    `;
}