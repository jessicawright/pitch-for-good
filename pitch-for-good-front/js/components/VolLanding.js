export default function VolLanding() {
    return `
        <section class="landing-background">
            <div class="vollanding__grid-container">
                <form class="vollanding__signin">
                    <h2>Been here before?</h2>
                    <input type="text" id="username" class="vol-username" placeholder="User Name:"><br>
                    <input type="password" id="password" class="vol-password" placeholder="Password:"><br>
                    <button class="js-vol-signin">Submit</button>
                </form>
                
                <div class="vollanding__signup">
                    <h2>Sign up!</h2> 
                    <button class="js--sign-up__volunteer">Create Account</button>
                </div> 
            </div>
        </section>
    `;
}