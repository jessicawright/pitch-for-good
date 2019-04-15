export default function OrgLanding() {
    return `
        <div class="orglanding__grid-container">
            <form>
                <div class="orglanding__signin">
                <h1>Returning Organization Sign In</h1>
                <span>Username: <input type="text" id="username" class="org-username"></span><br>
                <span>Password: <input type="text" id="password" class="org-password"></span>
                </div>
                <div class="orglanding__button">
                <button class="js-org-signin">Submit</button></div>
            </form>
            <div class="orglanding__signup">
                <h1>New User?</h1>
                <button class="js--sign-up__organization">Create Account</button>
            </div>
        </div>
    `;
}