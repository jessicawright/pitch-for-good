export default function addCauses(volunteer, causes) {
    return`
    <h1>Add additional causes to your profile:</h1>

    <div class="causes__container">
                    <ul id="causes">
                        ${causes.map(cause => {
                            return `
                                <li class="cause">     
                                    <input type="checkbox" class="cause__causeName" id="${cause.causeId}" name="causeIds" value="${cause.causeId}">${cause.causeName}
                                </li>
                            `;
                        }).join('')}
                    </ul>
            </div>

    <button id=${volunteer.volunteerId} class="js-addCauses">Submit</button>
    <button id=${volunteer.volunteerId} class="js-back-to-dashboard">Cancel</button>
    `;
}