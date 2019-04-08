import VolForm from './components/VolForm'
import Organization from './components/Organization'
import Organizations from './components/Organizations'
import Project from './components/Project'
import ProjectForm from './components/ProjectForm'
import landing from './components/landing'
import api from './utils/api/api-actions'
import events from './utils/events/event-actions'
import VolunteerDashboard from './components/VolunteerDashboard'
import Skills from './components/Skills'
import Cause from './components/Cause'

main()

function main() {
    getAppContext().innerHTML = landing()


    getOrganizations()
    // viewSingleOrganization()
    volClickToSignUp()
    createNewVolunteer()
    getProjectForm()
    addProject()
}

function getOrganizations() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js--see-organizations')) {
            api.getRequest(`http://localhost:8080/volunteers/${event.target.id}`, volunteer => {
                api.getRequest('http://localhost:8080/organizations', organizations => {
                    getAppContext().innerHTML = Organizations(volunteer, organizations)
                })
            })  
        }
        })
    }

// function viewSingleOrganization(){
// 	events.on(getAppContext(), 'click', () => {
// 		if(event.target.classList.contains('js-organization__orgName')) {
//             api.getRequest(`http://localhost:8080/volunteers/${event.target.parentNode.id}`, volunteer => {
// 			    api.getRequest(`http://localhost:8080/organizations/${event.target.id}`, organization => {
// 				    getAppContext().innerHTML = Organization(volunteer, organization)
// 			    })
// 		    })
//         }
//     })
// }

function volClickToSignUp() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js--sign-up__volunteer')) {
            api.getRequest('http://localhost:8080/causes', causes => {
                api.getRequest('http://localhost:8080/skills', skills => {
                    getAppContext().innerHTML = VolForm(causes, skills)

                })
            })
        }
    })
}
    
function createNewVolunteer() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js-add-volunteer')) {
            const firstName = document.querySelector('.add__firstName').value
            const lastName = document.querySelector('.add__lastName').value
            const volUserName = document.querySelector('.add__volUserName').value
            const volPassword = document.querySelector('.add__volPassword').value
            const phoneNum = document.querySelector('.add__phoneNum').value
            const email = document.querySelector('.add__email').value
            const jobTitle = document.querySelector('.add__jobTitle').value

            const skills = Array.from(document.querySelectorAll('.skill__skillName'))
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);

            const causes = Array.from(document.querySelectorAll('.cause__causeName'))
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);

            api.postRequest('http://localhost:8080/volunteers/add', {
                firstName : firstName,
                lastName : lastName,
                phoneNum : phoneNum,
                email : email,
                jobTitle : jobTitle,
                volUserName : volUserName,
                volPassword : volPassword,
                skills : skills,
                causes : causes
            }, (volunteer) => getAppContext().innerHTML = VolunteerDashboard(volunteer))
        }
    })
}

function getProjectForm() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js-get-project-form')) {
            api.getRequest(`http://localhost:8080/organizations/${event.target.id}`, organization => {
            console.log(organization)
            api.getRequest(`http://localhost:8080/skills`, skills => {
                console.log(skills)
                const volunteerId = document.querySelector(".parent-id").id
                api.getRequest(`http://localhost:8080/volunteers/${volunteerId}`, volunteer => {
                console.log(volunteer)
				    getAppContext().innerHTML = ProjectForm(organization, skills, volunteer)
                    })
                })
            })  
        }
    })
}

function addProject() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js-add-project')) {
            const projectName = document.querySelector('.add__projectName').value
            const projectDescription = document.querySelector('.add__projectDescription').value
            const estimatedDuration = document.querySelector('.add__estimatedDuration').value
            const volunteerSubmitId = document.querySelector(".project__submit-parent-volunteer").id
            const orgSubmitId = document.querySelector('.js-add-project').id
            
            const skills = Array.from(document.querySelectorAll('.js-skill__skillName'))
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);

            api.postRequest(`http://localhost:8080/projects/add`, {
                projectName : projectName,
                projectDescription : projectDescription,
                estimatedDuration : estimatedDuration,
                volunteerSubmitId : volunteerSubmitId,
                orgSubmitId : orgSubmitId,
                skills : skills
            }, (volunteer) => getAppContext().innerHTML = VolunteerDashboard(volunteer))
        }
    })
}
   

function getAppContext() {
    return document.querySelector("#app")
}