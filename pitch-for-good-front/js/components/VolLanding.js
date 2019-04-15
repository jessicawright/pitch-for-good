export default function VolLanding() {
    return `
        <div class="vollanding__grid-container">
            <form class="vollanding__signin">
                <h1>User Sign In</h1>
                <span><input type="text" id="username" class="vol-username" placeholder="User Name:"></span><br>
                <span><input type="text" id="password" class="vol-password" placeholder="Password:"></span><br>
                <button class="js-vol-signin">Submit</button>
            </form>
            <div class="vollanding__signup">
                <h1>New User?</h1> 
                <button class="js--sign-up__volunteer">Create Account</button>
            </div> 
        </div>
    `;
}