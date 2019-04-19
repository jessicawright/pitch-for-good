import VolForm from './components/VolForm'
import Organizations from './components/Organizations'
import ProjectForm from './components/ProjectForm'
import landing from './components/landing'
import api from './utils/api/api-actions'
import events from './utils/events/event-actions'
import VolunteerDashboard from './components/VolunteerDashboard'
import OrgForm from './components/OrgForm'
import OrganizationDashboard from './components/OrganizationDashboard'

import VolHeader from './components/VolHeader'

import OrgHeader from './components/OrgHeader'
import VolLanding from './components/VolLanding'
import OrgLanding from './components/OrgLanding'
import VolunterSearch from './components/VolunteerSearch'
import VolunteerList from './components/VolunteerList'
import addSkills from './components/addSkills'
import addCauses from './components/addCauses'


main()

function main() {
    getAppContext().innerHTML = landing()


    getOrganizations()
    volClickToSignUp()
    createNewVolunteer()
    getProjectForm()
    addProject()
    OrgClickToSignUp()
    addOrganization()

    getVolunteerSearchForm()
    getVolunteerListFromForm()
    getBackToOrgDashboard()

    goHome()
    deleteVolAccount()
    landing()
    VolEnter()
    volSignIn()
    VolLanding()
    OrgEnter()
    orgSignIn()
    deleteOrgAccount()
    volAddSkills()
    volAddCauses()
    goToVolunteerDashboard()
    volSubmitNewSkills()
    volSubmitNewCauses()
    orgAcceptProject()
    searchAgain()
    getBackToOrgDashboardFromSearch()

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

function volAddSkills() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js--vol-add-skills')) {
            const volId = document.querySelector('.js--vol-add-skills').id
            api.getRequest(`http://localhost:8080/volunteers/${volId}`, volunteer => {
                api.getRequest(`http://localhost:8080/skills/${volId}/add`, skills => {
                    getAppContext().innerHTML = addSkills(volunteer, skills)
                    getHeaderContext().innerHTML = ''
                })
            })
        }
    })
}

function volAddCauses() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js--vol-add-causes')) {
            const volId = document.querySelector('.js--vol-add-causes').id
            api.getRequest(`http://localhost:8080/volunteers/${volId}`, volunteer => {
                api.getRequest(`http://localhost:8080/causes/${volId}/add`, causes => {
                    getAppContext().innerHTML = addCauses(volunteer, causes)
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

function VolEnter() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js--enter__volunteer')) {
            getAppContext().innerHTML = VolLanding()
        }
    })
}

function OrgEnter() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js--enter__organization')) {
            getAppContext().innerHTML = OrgLanding()
        }
    })
}

function OrgClickToSignUp() {
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

function volSubmitNewSkills() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js-addSkills')) {

            const skills = Array.from(document.querySelectorAll('.skill__skillName'))
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);

            const volId = document.querySelector('.js-addSkills').id

            api.postRequest(`http://localhost:8080/volunteers/add/skills`, {
                volId : volId,
                skills : skills
        }, (volunteer) => volDashboardAndHeader(volunteer))

        }
    })
}

function volSubmitNewCauses() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js-addCauses')) {

            const causes = Array.from(document.querySelectorAll('.cause__causeName'))
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);

            const volId = document.querySelector('.js-addCauses').id

            api.postRequest(`http://localhost:8080/volunteers/add/causes`, {
                volId : volId,
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

function deleteOrgAccount() {
    events.on(getHeaderContext(), 'click', () => {
        if(event.target.classList.contains('js-org-delete-account')) {
            api.deleteRequest(`http://localhost:8080/organizations/delete/${event.target.id}`, {
            }, (organizations) => getAppContext().innerHTML = landing(), getHeaderContext().innerHTML = ""
        )}
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
            const orgUserName = document.querySelector('.add__orgUserName').value
            const orgPassword = document.querySelector('.add__orgPassword').value

            const causes = Array.from(document.querySelectorAll('.cause__causeName'))
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);

            api.postRequest(`http://localhost:8080/organizations/add`, {
                orgName : orgName,
                mission : mission,
                contactPerson : contactPerson,
                contactEmail : contactEmail,
                orgUrl : orgUrl,
                orgUserName : orgUserName,
                orgPassword : orgPassword,
                causes : causes
            }, (organization) => orgHeaderAndDashboard(organization))
        }
    })
}

function getVolunteerSearchForm() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js-get-volunteer-search')) {
            api.getRequest(`http://localhost:8080/organizations/${event.target.id}`, organization => {
                api.getRequest('http://localhost:8080/skills/', skills => {
                    getHeaderContext().innerHTML = ""
                    getAppContext().innerHTML = VolunterSearch(organization, skills)
                })
            })
        }
    })
}

function searchAgain() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js-search-again')) {
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
            const skillId = document.getElementById('skillId').value
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
        if(event.target.classList.contains('js-back-to-org-dashboard')) {
            api.getRequest(`http://localhost:8080/organizations/${event.target.id}`, organization => {
                getAppContext().innerHTML = OrganizationDashboard(organization)
                getHeaderContext().innerHTML = OrgHeader(organization)
            })
        }
    })
}

function getBackToOrgDashboardFromSearch() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('fa-arrow-left')) {
            api.getRequest(`http://localhost:8080/organizations/${event.target.id}`, organization => {
                getAppContext().innerHTML = OrganizationDashboard(organization)
                getHeaderContext().innerHTML = OrgHeader(organization)
            })
        }
    })
}

function orgAcceptProject() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js-accept-project')) {
            if(confirm('Are you sure you would like to accept the project? If you do, the volunteer will receive an email that their project has been accepted. They also will be able to contact you to move forward with the project.')) {
            api.getRequest(`http://localhost:8080/projects/${event.target.id}/accept`, organization => {
                getAppContext().innerHTML = OrganizationDashboard(organization)
                getHeaderContext().innerHTML = OrgHeader(organization)
            })
        }
    }
    })
 }

function goToVolunteerDashboard() {
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js-back-to-dashboard')) {
            api.getRequest(`http://localhost:8080/volunteers/${event.target.id}`, volunteer => {
                getAppContext().innerHTML = VolunteerDashboard(volunteer)
                getHeaderContext().innerHTML = VolHeader(volunteer)
            })
        }
    })
}

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

function orgSignIn() {
    events.on(getAppContext(), 'click', e => {
        if(event.target.classList.contains('js-org-signin')) {
            e.preventDefault()
            const username = document.querySelector('.org-username').value
            const password = document.querySelector('.org-password').value
            api.postRequest('http://localhost:8080/organizations/signin', {
                username : username,
                password : password
            }, (organization) => orgHeaderAndDashboard(organization))

        }
    })
}

function orgHeaderAndDashboard(organization) {
    getAppContext().innerHTML = OrganizationDashboard(organization)
    getHeaderContext().innerHTML = OrgHeader(organization)
}

function getHeaderContext() {
    return document.querySelector("#header");
}

function getAppContext() {
    return document.querySelector("#app");
}
