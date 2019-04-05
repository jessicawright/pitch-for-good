import VolForm from './components/VolForm'
import Organization from './components/Organization'
import Organizations from './components/Organizations'
import Project from './components/Project'
import ProjectForm from './components/ProjectForm'
import landing from './components/landing'
import api from './utils/api/api-actions'
import events from './utils/events/event-actions'

main()

function main() {
    getAppContext().innerHTML = landing()

    getOrganizations()
    viewSingleOrganization()
    volClickToSignUp()
    createNewVolunteer()
    getProjectForm()
    addProject()
}

function getOrganizations() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js--see-organizations')) {
            api.getRequest('http://localhost:8080/organizations', organizations => {
                getAppContext().innerHTML = Organizations(organizations)
            })
        }
    })
}

function viewSingleOrganization(){
	events.on(getAppContext(), 'click', () => {
		if(event.target.classList.contains('js-organization__name')){
			api.getRequest(`http://localhost:8080/organizations/${event.target.id}`, organization => {
				getAppContext().innerHTML = Organization(organization)
			})
		}
	})
}

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
            const phoneNum = document.querySelector('.add__phoneNum').value
            const email = document.querySelector('.add__email').value
            const jobTitle = document.querySelector('.add__jobTitle').value
            api.postRequest('http://localhost:8080/volunteers/add', {
                firstName : firstName,
                lastName : lastName,
                phoneNum : phoneNum,
                email : email,
                jobTitle : jobTitle
            }, (volunteer) => getAppContext().innerHTML = Volunteer(volunteer))
        }
    })
}

function getProjectForm() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js-get-project-form')) {
            api.getRequest(`http://localhost:8080/organizations/${event.target.id}`, organization => {
                api.getRequest('http://localhost:8080/skills', skills => {
                getAppContext().innerHTML = ProjectForm(skills, organization)
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
            const skills = document.querySelector('.add__skills').value
            api.postRequest(`http://localhost:8080/projects/add/${event.target.id}`, {
                projectName : projectName,
                projectDescription : projectDescription,
                estimatedDuration : estimatedDuration,
                skills : skills
            }, (volunteer) => getAppContext().innerHTML = landing())
        }
    })
}
    

function getAppContext() {
    return document.querySelector("#app")
}