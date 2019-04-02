import VolForm from './components/VolForm'
import Landing from './landing'
import api from './utils/api/api-actions'
import events from './utils/events/event-actions'

main()

function main() {
    getAppContext().innerHTML = Landing()
    }

    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js--sign-up__volunteer')) {
            api.getRequest('/volunteers/add', volunteer => {
                getAppContext().innerHTML = VolForm(volunteer)
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
})