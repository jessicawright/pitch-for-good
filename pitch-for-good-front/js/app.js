import VolForm from './components/VolForm'
import Organization from './components/Organization'
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
  
    volClickToSignUp()
    createNewVolunteer()
    getProjectForm()
    // addProject()

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
            api.getRequest('http://localhost:8080/projects', projects => {
                getAppContext().innerHTML = ProjectForm(projects)
            })  
        }
    })
}

function addProject() {
    events.on(getAppcontext(), 'click', () => {
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
                }, (project) => getAppContext().innerHTML = Project(project))
            }
        })
    }   


    
function getAppContext() {
    return document.querySelector("#app")
}

