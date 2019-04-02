import VolForm from './components/VolForm'

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
    })
