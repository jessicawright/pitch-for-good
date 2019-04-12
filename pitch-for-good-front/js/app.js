import VolForm from './components/VolForm'
import Organizations from './components/Organizations'
import ProjectForm from './components/ProjectForm'
import landing from './components/landing'
import api from './utils/api/api-actions'
import events from './utils/events/event-actions'
import VolunteerDashboard from './components/VolunteerDashboard'
import OrgForm from './components/OrgForm'
import OrganizationDashboard from './components/OrganizationDashboard'

import Volunteers from './components/Volunteers'
import VolunterSearch from './components/VolunteerSearch'
import VolunteerList from './components/VolunteerList'

import VolHeader from './components/VolHeader';
import OrgHeader from './components/OrgHeader'
import VolLanding from './components/VolLanding'


main()

function main() {
    getAppContext().innerHTML = landing()


    getOrganizations()
    // viewSingleOrganization()
    volClickToSignUp()
    createNewVolunteer()
    getProjectForm()
    addProject()
    orgClickToSignUp()
    addOrganization()

    getVolunteerSearchForm()
    getVolunteerListFromForm()
    getBackToOrgDashboard()

    goHome()
    deleteVolAccount()
    landing()
    volEnter()
    volSignIn()
    VolLanding()

}

function goHome() {
    events.on(getHeaderContext(), 'click', () => {
        if(event.target.classList.contains('js-log-out')) {
            getAppContext().innerHTML = landing()
            getHeaderContext().innerHTML = ""
        }
    })
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

function volEnter() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js--enter__volunteer')) {
            getAppContext().innerHTML = VolLanding()
        }
    })
}
                    
function orgClickToSignUp() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js--sign-up__organization')) {
            api.getRequest('http://localhost:8080/causes', causes => {
                    getAppContext().innerHTML = OrgForm(causes)
                    
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
            }, (volunteer) => volDashboardAndHeader(volunteer))
        }
    })
}

function deleteVolAccount() {
    events.on(getHeaderContext(), 'click', () => {
        if(event.target.classList.contains('js-delete-account')) {
            if(confirm('This action is final! Are you sure you want to delete your account?')) {
                api.deleteRequest(`http://localhost:8080/volunteers/delete/${event.target.id}`, {
            }, (volunteers) => getAppContext().innerHTML = landing(), getHeaderContext().innerHTML = ""
            )} else {
                return false;
            }
        }
    })
}            

function volDashboardAndHeader(volunteer) {
    getAppContext().innerHTML = VolunteerDashboard(volunteer)
    getHeaderContext().innerHTML = VolHeader(volunteer)
}

function getProjectForm() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js-get-project-form')) {
            // use hidden inputs (see volunteerDashboard) to pull in an id, as opposed to div, then do line below to get different id, in addition to event target id
            // use event.target.parentElement.querySelector().id ... somehow. broke the app
            api.getRequest(`http://localhost:8080/organizations/${event.target.id}`, organization => {
                console.log(organization)
                api.getRequest('http://localhost:8080/skills', skills => {
                    console.log(skills)
                const volunteerId = document.querySelector('.volunteerId').id
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

function addOrganization() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js-add-organization')) {
            const orgName = document.querySelector('.add__orgName').value
            const mission = document.querySelector('.add__mission').value
            const contactPerson = document.querySelector('.add__contactPerson').value
            const contactEmail = document.querySelector(".add__contactEmail").value
            const orgUrl = document.querySelector('.add__orgUrl').value
            
            const causes = Array.from(document.querySelectorAll('.cause__causeName'))
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);

            api.postRequest(`http://localhost:8080/organizations/add`, {
                orgName : orgName,
                mission : mission,
                contactPerson : contactPerson,
                contactEmail : contactEmail,
                orgUrl : orgUrl,
                causes : causes
            }, (organization) => getAppContext().innerHTML = OrganizationDashboard(organization))
        }
    })
}

function getVolunteerSearchForm() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js-get-volunteer-search')) {
            api.getRequest(`http://localhost:8080/organizations/${event.target.id}`, organization => {
                api.getRequest('http://localhost:8080/skills/', skills => {      
                    getAppContext().innerHTML = VolunterSearch(organization, skills)
                }) 
            }) 
        }
    })
}

function getVolunteerListFromForm() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js-find-volunteers-by-skill')) {
            api.getRequest(`http://localhost:8080/organizations/${event.target.id}`, organization => {
            const skillId = document.querySelector('.js-dropdown-skill').id
            api.getRequest(`http://localhost:8080/skills/${skillId}`, skill => {
                api.getRequest(`http://localhost:8080/skills/${skillId}/volunteers`, volunteers => {
                    getAppContext().innerHTML = VolunteerList(organization, skill, volunteers)
                })
            })
        })
        }
    })
}

function getBackToOrgDashboard() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js-back-to-dashboard')) {
            api.getRequest(`http://localhost:8080/organizations/${event.target.id}`, organization => {
                getAppContext().innerHTML = OrganizationDashboard(organization)
            })

function volSignIn() {
    events.on(getAppContext(), 'click', e => {
        if(event.target.classList.contains('js-vol-signin')) {
            e.preventDefault()
            const username = document.querySelector('.vol-username').value
            const password = document.querySelector('.vol-password').value
            api.postRequest('http://localhost:8080/volunteers/signin', {
                username : username,
                password : password
            }, (volunteer) => volDashboardAndHeader(volunteer))  
        }
    })
}
   
function getHeaderContext() {
    return document.querySelector("#header");
}

function getAppContext() {
    return document.querySelector("#app")
}