import Skills from './Skills'
import Cause from './Cause'
import Project from './Project'

export default function VolunteerDashboard(volunteer) {
    return `

    <div class="dashboard__container">
    <h6>Welcome, ${volunteer.firstName}!</h6>
        <div class="volDashboard__contact">
            <h6>Here is your user information:</h6>
            <ul>
                <li>First Name: ${volunteer.firstName}</li>
                <li>Last Name: ${volunteer.lastName}</li><br>
                <li>Username: ${volunteer.volUserName}</li>
                <li>Password: ${volunteer.volPassword}</li><br>
                <li>Phone Number: ${volunteer.phoneNum}</li>
                <li>Email: ${volunteer.email}</li><br>
                <li>Current Job Title: ${volunteer.jobTitle}</li>
            </ul>
        </div>
        <div class="volDashboard__skills">
            <h6>These are your skills:</h6>
            <ul>
                <li>${Skills(volunteer.skills)}</li>
            </ul>
            
            <button class="js--vol-add-skills" id=${volunteer.volunteerId}>Add Additional Skills</button>
            
        </div>
        <div class="volDashboard__causes">
            <h6>These are the causes you support:</h6>
            <ul>
                <li>${Cause(volunteer.causes)}</li>
            </ul>
            
            <button class="js--vol-add-causes" id=${volunteer.volunteerId}>Add Additional Causes</button>
            
        </div>
        <div class="volDashboard__projects">
            <h6>These are the projects you've pitched:</h6>
            <ul>
                <li>${Project(volunteer.projects)}</li>
            </ul>
        </div>
    </div>
    <h2>Click the button below to see organizations to make a proposal to.</h2>
    <button class="js--see-organizations button__big" id="${volunteer.volunteerId}">SEE ORGANIZATIONS</button>
    
    `
    // <input type="hidden" value="${volunteer.volunteerId}" class="volunteerId">
}