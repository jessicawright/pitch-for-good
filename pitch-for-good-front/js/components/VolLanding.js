export default function VolLanding() {
    return `
    <h1>Returning User Sign In</h1>
    <form>
        <span>Username: <input type="text" id="username" class="vol-username"></span><br>
        <span>Password: <input type="text" id="password" class="vol-password"></span><br>
        <button class="js-vol-signin">Submit</button>
    </form>

    <h1>New User?</h1>
    <button class="js--sign-up__volunteer">Create Account</button>
    `;
}