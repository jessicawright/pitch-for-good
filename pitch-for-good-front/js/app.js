import VolBioForm from './components/VolBioForm'
import VolCauseForm from './components/VolCauseForm'
import VolSkillForm from './components/VolSkillForm'
import Organization from './components/Organization'
import ProjectForm from './components/ProjectForm'
import landing from './components/landing'
import api from './utils/api/api-actions'
import events from './utils/events/event-actions'

main()

function main() {
    //api.getRequest(`http://localhost:8080/volunteers`, volunteers => {
        getAppContext().innerHTML = landing()
    

    // api.getRequest('http://localhost:8080/organizations', organizations => {
    //     getAppContext().innerHTML = Organization(organizations)
    // })


    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js--sign-up__volunteer')) {
            api.getRequest('http://localhost:8080/volunteers', volunteers => {
                getAppContext().innerHTML = VolBioForm(volunteers)
            })
            
        }

    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js--sign-up__volunteer-bio')) {
            api.getRequest('http://localhost:8080/causes', causes => {
                getAppContext().innerHTML = VolCauseForm(causes)
            })
            
        }
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js-add-volunteer-cause')) {
            api.getRequest('http://localhost:8080/skills', skills => {
                getAppContext().innerHTML = VolSkillForm(skills)
            })
            
        }
    
    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js-add-volunteer')) {
            const firstName = document.querySelector('.add__firstName').value
            const lastName = document.querySelector('.add__lastName').value
            const phoneNum = document.querySelector('.add__phoneNum').value
            const email = document.querySelector('.add__email').value
            const jobTitle = document.querySelector('.add__jobTitle').value
            //const causeName = // figure out how to pull in causes
            //const skills = // figure out how to pull in skills
            api.postRequest('http://localhost:8080/volunteers/add', {
                firstName : firstName,
                lastName : lastName,
                phoneNum : phoneNum,
                email : email,
                jobTitle : jobTitle
                // causeName : causeName,
                // skills : skills,
            }, (volunteer) => getAppContext().innerHTML = Volunteer(volunteer))
        }
    })

    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js-get-project-form')) {
            api.getRequest('http://localhost:8080/projects', projects => {
                getAppContext().innerHTML = ProjectForm(projects)
            })  
        }
    })

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

})
})
    })
    
    function getAppContext() {
        return document.querySelector("#app")
    }
}
