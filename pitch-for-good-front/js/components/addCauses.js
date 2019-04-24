export default function addCauses(volunteer, causes) {
    return`

    <div class="addCauses__background">
        <div id="addCauses-arrow">
            <span style="color: white;">
                <i class="causes-arrow fas fa-arrow-left fa-3x" id=${volunteer.volunteerId}></i>
            </span>
        </div>
        <h2 class="addCauses__headline">Add additional causes to your profile:</h2>

        <div class="causes__container">
            <ul class="cause__container__list">
                ${causes.map(cause => {
                    return `
                        <li class="causeNameList">
                            <label><input type="checkbox" class="cause__causeName" id="${cause.causeId}" name="causeIds" value="${cause.causeId}"><span class="cause-bold">${cause.causeName}</span></label>:   <span class="cause__description">${cause.causeDescription}</span>
                        </li>

                    `;
                }).join('')}
            </ul>
        </div>
        <div class="addCause__button"><button id=${volunteer.volunteerId} class="js-addCauses">Submit</button></div>   
    </div>
    `;
}
