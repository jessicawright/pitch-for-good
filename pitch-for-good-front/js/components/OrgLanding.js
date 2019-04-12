export default function OrgLanding() {
    return `
    <h1>Returning Organization Sign In</h1>
    <form>
        <span>Username: <input type="text" id="username" class="org-username"></span><br>
        <span>Password: <input type="text" id="password" class="org-password"></span><br>
        <button class="js-org-signin">Submit</button>
    </form>

    <h1>New User?</h1>
    <button class="js--sign-up__organization">Create Account</button>
    `;
}