export default function Cause(causes) {
    return `
    <ul id="cause">
            ${causes.map(cause => {
        return `
            <li class="cause">
                <h3 class="causeName">${cause.causeName}</h3>
            </li>
        `;
    }).join('')}
        </ul>

    `;
}