import Skills from './Skills'
import Cause from './Cause'

export default function VolunteerDashboard(volunteer) {
    return `
    <h1>Welcome, ${volunteer.firstName}!</h1>

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

    <h2>These are your skills:</h2>
    <ul>
        <li>${Skills(volunteer.skills)}</li>
    </ul>

    <h2>These are the causes you support:</h2>
    <ul>
        <li>${Cause(volunteer.causes)}</li>
    </ul>
    
    `;
}