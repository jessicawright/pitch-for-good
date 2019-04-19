import Skills from './Skills'
import Cause from './Cause'
import Project from './Project'

export default function VolunteerDashboard(volunteer) {
    return `
    <h6>Welcome, ${volunteer.firstName}!</h6>
    <div class="vol-dashboard-container"
        <h2>Click the button below to see organizations to make a proposal to.</h2>
        <button class="js--see-organizations button__big" id="${volunteer.volunteerId}">SEE ORGANIZATIONS</button>
                

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

        <div class="section-container1">
            <span style="color: white;">
                <i class="fas fa-clipboard-list fa-3x"></i>
            </span>
            <h6>Your skills:</h6>
            <ul>
                <li>${Skills(volunteer.skills)}</li>
            </ul>
            <button class="js--vol-add-skills" id=${volunteer.volunteerId}>Add Additional Skills</button>
        </div>

        <div class="section-container2">
            <span style="color: white;">
                <i class="fas fa-hand-holding-heart fa-3x"></i>
            </span>
            <h6>Causes you support:</h6>
            <ul>
                <li>${Cause(volunteer.causes)}</li>
            </ul>
            <button class="js--vol-add-causes" id=${volunteer.volunteerId}>Add Additional Causes</button>      
        </div>
            
        <div class="section-container3">
            <span style="color: white;">
                <i class="fas fa-user-edit fa-3x"></i>
            </span>
            <h6>Projects you've pitched:</h6>
            <ul>
                <li>${Project(volunteer.projects)}</li>
            </ul>
        </div>
    </div> 
    `
    // <input type="hidden" value="${volunteer.volunteerId}" class="volunteerId">
}