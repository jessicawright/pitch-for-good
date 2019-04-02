import VolForm from './components/VolForm'
import landing from './landing'
import api from './utils/api/api-actions'
import events from './utils/events/event-actions'

main()

function main() {
    api.getRequest(`http://localhost:8080/volunteers`, volunteers => {
        getAppContext().innerHTML = landing()
    })

    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('js--sign-up__volunteer')) {
            api.getRequest('/volunteers/add', volunteer => {
                getAppContext().innerHTML = VolForm(volunteer)
            })
        }
    })

    function getAppContext() {
        return document.querySelector("#app")
    }
}
