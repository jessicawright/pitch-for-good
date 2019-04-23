export default function Cause(causes) {
    return `
    <ul id="cause">
            ${causes.map(cause => {
        return `
            <li class="cause">
                <h4 class="causeName">${cause.causeName}</h4>
            </li>
        `;
    }).join('')}
        </ul>

    `;
}