import Skills from './Skills'
import Cause from './Cause'
import Project from './Project'

export default function VolunteerDashboard(volunteer) {
    return `
    <h1>Welcome, ${volunteer.firstName}!</h1>

    <div class="dashboard__container">
        <div class="volDashboard__contact">
            <h2>Here is your user information:</h2>
            <ul>
                <li>First Name: ${volunteer.firstName}</li>
                <li>Last Name: ${volunteer.lastName}</li>
                <li>Username: ${volunteer.volUserName}</li>
                <li>Password: ${volunteer.volPassword}</li>
                <li>Phone Number: ${volunteer.phoneNum}</li>
                <li>Email: ${volunteer.email}</li>
                <li>Current Job Title: ${volunteer.jobTitle}</li>
            </ul>
        </div>
        <div class="volDashboard__skills">
            <h2>These are your skills:</h2>
            <ul>
                <li>${Skills(volunteer.skills)}</li>
            </ul>
        </div>
        <div class="volDashboard__causes">
            <h2>These are the causes you support:</h2>
            <ul>
                <li>${Cause(volunteer.causes)}</li>
            </ul>
        </div>
        <div class="volDashboard__projects">
            <h2>These are the projects you've pitched:</h2>
            <ul>
                <li>${Project(volunteer.projects)}</li>
            </ul>
        </div>
    </div>
    <h2>Click the button below to see organizations to make a proposal to.</h2>
    <button class="js--see-organizations button__big" id="${volunteer.volunteerId}">SEE ORGANIZATIONS</button>
    
    `;
}