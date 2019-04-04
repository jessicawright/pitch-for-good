import VolForm from './components/VolForm'
import landing from './components/landing'
import api from './utils/api/api-actions'
import events from './utils/events/event-actions'

main()

function main() {
    api.getRequest(`http://localhost:8080/volunteers`, volunteers => {
        getAppContext().innerHTML = landing()
    })

    volClickToSignUp()
    createNewVolunteer()



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
    
function getAppContext() {
    return document.querySelector("#app")
}

