export default function addCauses(volunteer, causes) {
    return`

    <section class="addCauses__background">
    <h1 class="addCauses__headline">Add additional causes to your profile:</h1>

    <div class="causes__container">
                    <ul id="cause__container__list">
                        ${causes.map(cause => {
                            return `
                                <li class="causeNameList">
                                    <label><input type="checkbox" class="cause__causeName" id="${cause.causeId}" name="causeIds" value="${cause.causeId}">${cause.causeName}</label>
                                </li>
                                <li class="causeDescpriptionList">
                                    <p class="cause__description">${cause.causeDescription}</p>
                                </li>
                            `;
                        }).join('')}
                    </ul>

      <div class="cause__buttons">
        <button id=${volunteer.volunteerId} class="js-addCauses">Submit</button>
        <button id=${volunteer.volunteerId} class="js-back-to-dashboard">Cancel</button>
      </div>
    </div>
  </section>
    `;
}
