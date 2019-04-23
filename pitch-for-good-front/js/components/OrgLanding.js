export default function OrgLanding() {
    return `
    <section class="landing-background">
        <div class="orglanding__grid-container">
            <form class="orglanding__signin">
                <h2>Been here before?</h2>
                <input type="text" id="username" class="org-username" placeholder="Username:"><br>
                <input type="text" id="password" class="org-password" placeholder="Password:"><br>
                <button class="js-org-signin">Submit</button>
            </form>

            <div class="orglanding__signup">
                <h2>Sign up!</h2>
                <button class="js--sign-up__organization">Create Account</button>
            </div>
        </div>
    </section>
    `;
}