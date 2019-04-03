export default function VolCauseForm(causes) {

return `
<div class="causes-container">
<ul class="causes">
    ${causes.map(cause => {
        return `
            <li class="cause">      //check cause.causeName may need to change volunteerID
                <input type="checkbox" class="cause__causeName" id="${cause.id}" value="${cause.causeName}">
            </li>
            `  
    }).join('')}
</ul>
<button class="js-add-volunteer-cause button">Next</button>
</div>
`;
}